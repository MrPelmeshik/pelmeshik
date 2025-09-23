using System.ComponentModel.DataAnnotations;

namespace TaskerApi.Models.Requests;

/// <summary>
/// Запрос на обновление группы
/// </summary>
public class GroupUpdateRequest
{
    /// <summary>
    /// Заголовок группы
    /// </summary>
    [Required(ErrorMessage = "Заголовок группы обязателен")]
    [StringLength(255, ErrorMessage = "Заголовок группы не может быть длиннее 255 символов")]
    public string Title { get; set; } = string.Empty;

    /// <summary>
    /// Описание группы
    /// </summary>
    [StringLength(1000, ErrorMessage = "Описание группы не может быть длиннее 1000 символов")]
    public string? Description { get; set; }
}
