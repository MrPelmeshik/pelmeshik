namespace Utility.Interfaces;

public interface IService<TSource> where TSource : IItemKey
{
    /// <summary>
    /// Получить элемент по идентификатору
    /// </summary>
    Task<TSource?> GetItem(TSource key);

    /// <summary>
    /// Получить элементы
    /// </summary>
    Task<IEnumerable<TSource>> GetItems();

    /// <summary>
    /// Добавить элемент
    /// </summary>
    Task<int> AddItem(TSource item);

    /// <summary>
    /// Добавить элементы
    /// </summary>
    // Task<IEnumerable<int>> AddItems(IEnumerable<TSource> items);

    /// <summary>
    /// Обновить элемент
    /// </summary>
    Task UpdateItem(TSource item);

    /// <summary>
    /// Обновить элементы
    /// </summary>
    // Task UpdateItems(IEnumerable<TSource> items);

    /// <summary>
    /// Удалить элемент
    /// </summary>
    Task DeleteItem(TSource key);

    /// <summary>
    /// Удалить элементы
    /// </summary>
    // Task DeleteItems(IEnumerable<TSource> keys);

    /// <summary>
    /// Добавить или обновить элемент
    /// </summary>
    Task<int> AddOrUpdateItem(TSource item);
}