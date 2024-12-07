namespace Utility.Models;

public interface IItemUpdatedDate
{
    /// <summary>
    /// Дата последнего обновления
    /// </summary>
    public DateTime? UpdateDate { get; set; }
}