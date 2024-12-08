using Microsoft.Extensions.Logging;
using Utility.Interfaces;
using Utility.Models;
using Utility.Providers;

namespace Utility.Services;

public class BaseService<TSource> (
    ILogger<BaseService<TSource>> logger,
    BaseProvider<TSource> provider,
    ConnectionProvider connectionProvider
    ) : IService<TSource> where TSource : IItemKey
{
    /// <summary>
    /// Получить элемент по идентификатору
    /// </summary>
    public async Task<TSource?> GetItem(TSource item)
    {
        using var conn = connectionProvider.GetDefaultConnection();
        return await provider.GetItem(conn, item);
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
    /// Обновить элемент
    /// </summary>
    public async Task UpdateItem(TSource item)
    {
        using var conn = connectionProvider.GetDefaultConnection();
        await provider.UpdateItem(conn, item);
    }

    /// <summary>
    /// Удалить элемент
    /// </summary>
    public async Task DeleteItem(TSource item)
    {
        using var conn = connectionProvider.GetDefaultConnection();
        await provider.DeleteItem(conn, item);
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