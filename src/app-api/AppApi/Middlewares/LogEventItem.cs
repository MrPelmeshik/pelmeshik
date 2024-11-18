namespace AppApi.Middlewares;

/// <summary>
/// Класс для хранения информации о событии
/// </summary>
/// <param name="userId">Идентификатор пользователя</param>
/// <param name="callSite">Место вызова</param>
/// <param name="eventDescription">Описание события</param>
public class LogEventItem(
    string? userId,
    string? callSite,
    string? eventDescription)
{
    /// <summary>
    /// Дата начала события 
    /// </summary>
    private DateTime DateStart { get; } = DateTime.UtcNow;
    
    /// <summary>
    /// Дата окончания события 
    /// </summary>
    private DateTime? DateEnd { get; set; }
    
    /// <summary>
    /// Идентификатор пользователя
    /// </summary>
    private string? UserId { get; set; } = userId;
    
    /// <summary>
    /// Код места вызова
    /// </summary>
    private string? CallSite { get; set; } = callSite;
    
    /// <summary>
    /// Описание события
    /// </summary>
    private string? EventDescription { get; set; } = eventDescription;
    
    /// <summary>
    /// Сообщение 
    /// </summary>
    private string? Message { get; set; }
    
    /// <summary>
    /// Исключение
    /// </summary>
    private string? Exception { get; set; }
    
    /// <summary>
    /// Признак закрытия события
    /// </summary>
    private bool IsClosedEvent => DateEnd != null;

    /// <summary>
    /// Закрывает событие
    /// </summary>
    /// <param name="message">Сообщение</param>
    /// <param name="exception">Исключение</param>
    /// <exception cref="InvalidOperationException">Сообщение уже было закрыто</exception>
    public void SetResult(
        string? message = null,
        string? exception = null)
    {
        if (IsClosedEvent) throw new InvalidOperationException("Сообщение уже было закрыто");
        
        DateEnd = DateTime.UtcNow;
        Message = message;
        Exception = exception;
    }

    public override string ToString()
    {
        if (!IsClosedEvent) SetResult();

        return $"""
                DateStart:{DateStart}
                DateEnd:{DateEnd}
                UserId:{UserId}
                CallSite:{CallSite}
                EventDescription:{EventDescription}
                Message:{Message}
                Exception:{Exception}
                """;
    }
}