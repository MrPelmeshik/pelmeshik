namespace TaskerApi.Models.Responses;

/// <summary>
/// Краткая информация об области для карточки.
/// </summary>
public class AreaShortCardResponse
{
    /// <summary>
    /// Уникальный идентификатор области.
    /// </summary>
    public Guid Id { get; set; }
    
    /// <summary>
    /// Заголовок области.
    /// </summary>
    public string Title { get; set; } = string.Empty;
    
    /// <summary>
    /// Описание области.
    /// </summary>
    public string? Description { get; set; }
    
    /// <summary>
    /// Количество групп в области.
    /// </summary>
    public int GroupCount { get; set; }
    
    /// <summary>
    /// Дата и время создания.
    /// </summary>
    public DateTimeOffset CreatedAt { get; set; }
    
    /// <summary>
    /// Флаг активности записи.
    /// </summary>
    public bool IsActive { get; set; }
}
