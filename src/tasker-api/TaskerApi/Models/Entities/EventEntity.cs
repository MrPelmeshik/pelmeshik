using System.ComponentModel.DataAnnotations.Schema;
using TaskerApi.Interfaces.Models.Entities;
using TaskerApi.Models.Common;

namespace TaskerApi.Models.Entities;

/// <summary>
/// События
/// </summary>
[Table("events")]
public class EventEntity : 
    IDbEntity,
    IAutoIdBaseEntity<Guid>, 
    ISoftDeleteBaseEntity, 
    IUpdatedDateBaseEntity, 
    ICreatedDateBaseEntity, 
    ICreatorUserBaseEntity
{
    /// <summary>
    /// Тип события
    /// </summary>
    [Column("event_type")]
    public EventType EventType { get; set; }
    
    /// <summary>
    /// Заголовок события
    /// </summary>
    [Column("title")]
    public string Title { get; set; } = string.Empty;

    /// <summary>
    /// Описание события
    /// </summary>
    [Column("description")]
    public string? Description { get; set; }
    
    /// <summary>
    /// Дата и время создания.
    /// </summary>
    public DateTimeOffset CreatedAt { get; set; }

    /// <summary>
    /// Идентификатор пользователя-создателя.
    /// </summary>
    public Guid CreatorUserId { get; set; }
    
    /// <summary>
    /// Уникальный идентификатор события.
    /// </summary>
    public Guid Id { get; set; }
    
    /// <summary>
    /// Дата и время деактивации (мягкое удаление).
    /// </summary>
    public DateTimeOffset? DeactivatedAt { get; set; }
    
    /// <summary>
    /// Флаг активности записи.
    /// </summary>
    public bool IsActive { get; set; }
    
    /// <summary>
    /// Дата и время последнего обновления.
    /// </summary>
    public DateTimeOffset UpdatedAt { get; set; }
}