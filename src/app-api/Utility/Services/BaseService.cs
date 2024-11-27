using Microsoft.Extensions.Logging;
using Utility.Providers;

namespace Utility.Services;

public class BaseService<T> (
    ILogger<BaseService<T>> logger,
    BaseProvider<T> provider,
    ConnectionProvider connectionProvider)
{
    /// <summary>
    /// Получить элемент по идентификатору
    /// </summary>
    public async Task<T?> GetItem(int id)
    {
        using var conn = connectionProvider.GetDefaultConnection();
        return await provider.GetItem(conn, id);
    }

    /// <summary>
    /// Получить элементы
    /// </summary>
    public async Task<IEnumerable<T>> GetItems()
    {
        using var conn = connectionProvider.GetDefaultConnection();
        return await provider.GetItems(conn);
    }

    /// <summary>
    /// Добавить элемент
    /// </summary>
    public async Task<int> AddItem(T item)
    {
        using var conn = connectionProvider.GetDefaultConnection();
        return await provider.AddItem(conn, item);
    }

    /// <summary>
    /// Добавить элементы
    /// </summary>
    public async Task<IEnumerable<int>> AddItems(IEnumerable<T> items)
    {
        throw new NotImplementedException();
    }

    /// <summary>
    /// Обновить элемент
    /// </summary>
    public async Task UpdateItem(T item)
    {
        using var conn = connectionProvider.GetDefaultConnection();
        await provider.UpdateItem(conn, item);
    }

    /// <summary>
    /// Обновить элементы
    /// </summary>
    public async Task UpdateItems(IEnumerable<T> items)
    {
        throw new NotImplementedException();
    }

    /// <summary>
    /// Удалить элемент
    /// </summary>
    public async Task DeleteItem(int id)
    {
        using var conn = connectionProvider.GetDefaultConnection();
        await provider.DeleteItem(conn, id);
    }

    /// <summary>
    /// Удалить элементы
    /// </summary>
    public async Task DeleteItems(IEnumerable<int> ids)
    {
        throw new NotImplementedException();
    }
}