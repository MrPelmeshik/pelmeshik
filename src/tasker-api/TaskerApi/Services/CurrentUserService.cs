using System.Security.Claims;
using TaskerApi.Core;
using TaskerApi.Interfaces.Repositories;
using TaskerApi.Interfaces.Services;
using TaskerApi.Models.Entities;

namespace TaskerApi.Services;

/// <summary>
/// Сервис для работы с текущим пользователем
/// </summary>
public class CurrentUserService: ICurrentUserService
{
    /// <summary>
    /// Идентификатор текущего пользователя
    /// </summary>
    public Guid UserId { get; }
    
    /// <summary>
    /// Флаг аутентификации пользователя
    /// </summary>
    public bool IsAuthenticated { get; }

    private readonly IUserRepository _userRepository;
    private readonly IUserAreaAccessRepository _userAreaAccessRepository;
    private UserEntity? _user;
    private IReadOnlyList<Guid>? _accessibleAreas;
    private IReadOnlyList<Guid>? _accessibleGroups;

    public CurrentUserService(
        IHttpContextAccessor httpContextAccessor,
        IUserRepository userRepository,
        IUserAreaAccessRepository userAreaAccessRepository)
    {
        _userRepository = userRepository;
        _userAreaAccessRepository = userAreaAccessRepository;
        
        var principal = httpContextAccessor.HttpContext?.User;
        
        UserId = Guid.TryParse(principal?.FindFirstValue(ClaimTypes.NameIdentifier), out var guid) 
            ? guid 
            : Guid.Empty;
            
        IsAuthenticated = UserId != Guid.Empty && principal?.Identity?.IsAuthenticated == true;
    }

    /// <summary>
    /// Список доступных областей для пользователя
    /// </summary>
    public IReadOnlyList<Guid> AccessibleAreas => _accessibleAreas ??= LoadAccessibleAreas();
    
    /// <summary>
    /// Список доступных групп для пользователя
    /// </summary>
    public IReadOnlyList<Guid> AccessibleGroups => _accessibleGroups ??= LoadAccessibleGroups();

    /// <summary>
    /// Получить данные текущего пользователя
    /// </summary>
    /// <returns>Данные пользователя или null</returns>
    public UserEntity? GetUser()
    {
        return _user ??= LoadUser();
    }

    /// <summary>
    /// Проверить доступ к области
    /// </summary>
    /// <param name="areaId">Идентификатор области</param>
    /// <returns>True, если есть доступ</returns>
    public bool HasAccessToArea(Guid areaId)
    {
        return AccessibleAreas.Contains(areaId);
    }

    /// <summary>
    /// Проверить доступ к группе
    /// </summary>
    /// <param name="groupId">Идентификатор группы</param>
    /// <returns>True, если есть доступ</returns>
    public bool HasAccessToGroup(Guid groupId)
    {
        return AccessibleGroups.Contains(groupId);
    }

    /// <summary>
    /// Проверить доступ к любой из областей
    /// </summary>
    /// <param name="areaIds">Список идентификаторов областей</param>
    /// <returns>True, если есть доступ к любой области</returns>
    public bool HasAccessToArea(IList<Guid> areaIds)
    {
        return areaIds.Any(id => AccessibleAreas.Contains(id));
    }

    /// <summary>
    /// Проверить доступ к любой из групп
    /// </summary>
    /// <param name="groupIds">Список идентификаторов групп</param>
    /// <returns>True, если есть доступ к любой группе</returns>
    public bool HasAccessToGroup(IList<Guid> groupIds)
    {
        return groupIds.Any(id => AccessibleGroups.Contains(id));
    }

    /// <summary>
    /// Проверить, является ли пользователь администратором
    /// </summary>
    /// <returns>True, если пользователь администратор</returns>
    public bool IsAdmin()
    {
        return GetUser()?.IsAdmin ?? false;
    }

    /// <summary>
    /// Проверить, активен ли пользователь
    /// </summary>
    /// <returns>True, если пользователь активен</returns>
    public bool IsActive()
    {
        return GetUser()?.IsActive ?? false;
    }

    private UserEntity? LoadUser()
    {
        if (!IsAuthenticated) return null;
        
        try
        {
            return _userRepository.GetByIdAsync(UserId, CancellationToken.None).Result;
        }
        catch
        {
            return null;
        }
    }

    private IReadOnlyList<Guid> LoadAccessibleAreas()
    {
        if (!IsAuthenticated) return new List<Guid>();
        
        try
        {
            var userAreaAccesses = _userAreaAccessRepository.GetByUserIdAsync(UserId, CancellationToken.None).Result;
            return userAreaAccesses.Select(uaa => uaa.AreaId).ToList();
        }
        catch
        {
            return new List<Guid>();
        }
    }

    private IReadOnlyList<Guid> LoadAccessibleGroups()
    {
        return new List<Guid>();
    }
}