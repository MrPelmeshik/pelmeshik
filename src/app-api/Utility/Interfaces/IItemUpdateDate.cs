namespace Utility.Models;

public interface IItemUpdateDate
{
    /// <summary>
    /// Дата последнего обновления
    /// </summary>
    public DateTime? UpdateDate { get; set; }
}