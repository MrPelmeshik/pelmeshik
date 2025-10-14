using TaskerApi.Core;
using TaskerApi.Interfaces.Repositories;
using TaskerApi.Interfaces.Services;
using TaskerApi.Models.Entities;
using TaskerApi.Models.Requests;
using TaskerApi.Models.Responses;
using TaskerApi.Services.Base;
using TaskerApi.Services.Mapping;

namespace TaskerApi.Services;

/// <summary>
/// Сервис для работы с целями с использованием Entity Framework
/// </summary>
public class PurposeService(
    ILogger<PurposeService> logger,
    ICurrentUserService currentUser,
    IPurposeRepository purposeRepository,
    TaskerDbContext context)
    : BaseService(logger, currentUser), IPurposeService
{
    /// <summary>
    /// Получить все цели
    /// </summary>
    /// <param name="cancellationToken">Токен отмены операции</param>
    /// <returns>Список всех целей</returns>
    public async Task<IEnumerable<PurposeResponse>> GetAsync(CancellationToken cancellationToken)
    {
        return await ExecuteWithErrorHandling(async () =>
        {
            var purposes = await purposeRepository.GetAllAsync(cancellationToken);
            return purposes.Select(p => p.ToPurposeResponse());
        }, nameof(GetAsync));
    }

    /// <summary>
    /// Получить цель по идентификатору
    /// </summary>
    /// <param name="id">Идентификатор цели</param>
    /// <param name="cancellationToken">Токен отмены операции</param>
    /// <returns>Цель или null, если не найдена</returns>
    public async Task<PurposeResponse?> GetByIdAsync(Guid id, CancellationToken cancellationToken)
    {
        try
        {
            var purpose = await purposeRepository.GetByIdAsync(id, cancellationToken);
            if (purpose == null)
            {
                return null;
            }

            return purpose.ToPurposeResponse();
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Ошибка получения цели по идентификатору {PurposeId}", id);
            throw;
        }
    }

    /// <summary>
    /// Создать новую цель
    /// </summary>
    /// <param name="request">Данные для создания цели</param>
    /// <param name="cancellationToken">Токен отмены операции</param>
    /// <returns>Созданная цель</returns>
    public async Task<PurposeResponse> CreateAsync(PurposeCreateRequest request, CancellationToken cancellationToken)
    {
        try
        {
            var purpose = new PurposeEntity
            {
                Id = Guid.NewGuid(),
                Title = request.Title,
                Description = request.Description,
                CreatorUserId = currentUser.UserId,
                CreatedAt = DateTimeOffset.UtcNow,
                UpdatedAt = DateTimeOffset.UtcNow,
                IsActive = true
            };

            var createdPurpose = await purposeRepository.CreateAsync(purpose, cancellationToken);

            return createdPurpose.ToPurposeResponse();
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Ошибка создания цели");
            throw;
        }
    }

    /// <summary>
    /// Обновить цель
    /// </summary>
    /// <param name="id">Идентификатор цели</param>
    /// <param name="request">Данные для обновления</param>
    /// <param name="cancellationToken">Токен отмены операции</param>
    /// <returns>Обновленная цель</returns>
    public async Task<PurposeResponse> UpdateAsync(Guid id, PurposeUpdateRequest request, CancellationToken cancellationToken)
    {
        try
        {
            var purpose = await purposeRepository.GetByIdAsync(id, cancellationToken);
            if (purpose == null)
            {
                throw new InvalidOperationException("Цель не найдена");
            }

            purpose.Title = request.Title;
            purpose.Description = request.Description;
            purpose.UpdatedAt = DateTimeOffset.UtcNow;

            await purposeRepository.UpdateAsync(purpose, cancellationToken);

            return purpose.ToPurposeResponse();
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Ошибка обновления цели {PurposeId}", id);
            throw;
        }
    }

    /// <summary>
    /// Удалить цель
    /// </summary>
    /// <param name="id">Идентификатор цели</param>
    /// <param name="cancellationToken">Токен отмены операции</param>
    public async Task DeleteAsync(Guid id, CancellationToken cancellationToken)
    {
        try
        {
            var purpose = await purposeRepository.GetByIdAsync(id, cancellationToken);
            if (purpose == null)
            {
                throw new InvalidOperationException("Цель не найдена");
            }

            await purposeRepository.DeleteAsync(id, cancellationToken);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Ошибка удаления цели {PurposeId}", id);
            throw;
        }
    }

    /// <summary>
    /// Получить цели по создателю
    /// </summary>
    /// <param name="creatorId">Идентификатор создателя</param>
    /// <param name="cancellationToken">Токен отмены операции</param>
    /// <returns>Список целей создателя</returns>
    public async Task<IEnumerable<PurposeResponse>> GetByCreatorIdAsync(Guid creatorId, CancellationToken cancellationToken)
    {
        try
        {
            var purposes = await purposeRepository.GetByCreatorIdAsync(creatorId, cancellationToken);

            return purposes.Select(p => p.ToPurposeResponse());
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Ошибка получения целей по идентификатору создателя {CreatorId}", creatorId);
            throw;
        }
    }
}