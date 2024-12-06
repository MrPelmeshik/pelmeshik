using Microsoft.Extensions.Logging;
using Utility.Interfaces;
using Utility.Models;
using Utility.Providers;

namespace Utility.Services;

public class BaseService<TSource, TKey> (
    ILogger<BaseService<TSource, TKey>> logger,
    BaseProvider<TSource, TKey> provider,
    ConnectionProvider connectionProvider
    ) where TKey : IItemKey where TSource : TKey
{
    /// <summary>
    /// Получить элемент по идентификатору
    /// </summary>
    public async Task<TSource?> GetItem(TKey key)
    {
        using var conn = connectionProvider.GetDefaultConnection();
        return await provider.GetItem(conn, key);
    }

    /// <summary>
    /// Получить элементы
    /// </summary>
    public async Task<IEnumerable<TSource>> GetItems()
    {
        using var conn = connectionProvider.GetDefaultConnection();
        return await provider.GetItems(conn);
    }

    /// <summary>
    /// Добавить элемент
    /// </summary>
    public async Task<int> AddItem(TSource item)
    {
        using var conn = connectionProvider.GetDefaultConnection();
        return await provider.AddItem(conn, item);
    }

    /// <summary>
    /// Добавить элементы
    /// </summary>
    public async Task<IEnumerable<int>> AddItems(IEnumerable<TSource> items)
    {
        throw new NotImplementedException();
    }

    /// <summary>
    /// Обновить элемент
    /// </summary>
    public async Task UpdateItem(TSource item)
    {
        using var conn = connectionProvider.GetDefaultConnection();
        await provider.UpdateItem(conn, item);
    }

    /// <summary>
    /// Обновить элементы
    /// </summary>
    public async Task UpdateItems(IEnumerable<TSource> items)
    {
        throw new NotImplementedException();
    }

    /// <summary>
    /// Удалить элемент
    /// </summary>
    public async Task DeleteItem(TKey key)
    {
        using var conn = connectionProvider.GetDefaultConnection();
        await provider.DeleteItem(conn, key);
    }

    /// <summary>
    /// Удалить элементы
    /// </summary>
    public async Task DeleteItems(IEnumerable<TKey> keys)
    {
        throw new NotImplementedException();
    }
    
    /// <summary>
    /// Добавить или обновить элемент
    /// </summary>
    public async Task<int> AddOrUpdateItem(TSource item)
    {
        using var conn = connectionProvider.GetDefaultConnection();
        return await provider.AddOrUpdateItem(conn, item);
    }
}