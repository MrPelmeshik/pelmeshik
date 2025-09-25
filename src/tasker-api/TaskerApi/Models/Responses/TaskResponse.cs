namespace TaskerApi.Models.Responses;

/// <summary>
/// Ответ с информацией о задаче
/// </summary>
public class TaskResponse
{
    /// <summary>
    /// Идентификатор задачи
    /// </summary>
    public Guid Id { get; set; }

    /// <summary>
    /// Заголовок задачи
    /// </summary>
    public string Title { get; set; } = string.Empty;

    /// <summary>
    /// Описание задачи
    /// </summary>
    public string? Description { get; set; }

    /// <summary>
    /// ID группы
    /// </summary>
    public Guid GroupId { get; set; }

    /// <summary>
    /// ID пользователя-создателя
    /// </summary>
    public Guid CreatorUserId { get; set; }

    /// <summary>
    /// Дата создания
    /// </summary>
    public DateTimeOffset CreatedAt { get; set; }

    /// <summary>
    /// Дата обновления
    /// </summary>
    public DateTimeOffset UpdatedAt { get; set; }

    /// <summary>
    /// Активна ли задача
    /// </summary>
    public bool IsActive { get; set; }

    /// <summary>
    /// Дата деактивации
    /// </summary>
    public DateTimeOffset? DeactivatedAt { get; set; }
}
