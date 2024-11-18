using System.Data.Common;
using Dapper;
using Microsoft.Extensions.Logging;

namespace Utility.Providers;

/// <summary>
/// Базовый провайдер
/// </summary>
public abstract class BaseProvider<T>(
    ILogger<BaseProvider<T>> logger, 
    ConnectionProvider connectionProvider,
    SqlProvider<T> sqlProvider
    )
{
    /// <summary>
    /// Получить элемент по идентификатору
    /// </summary>
    public async Task<T> GetItem(int id)
    {
        var query = sqlProvider.GetSelectByKeyQuery();
        using var conn = connectionProvider.GetDefaultConnection();
        return await conn.QueryFirstAsync<T>(query, new { id });
    }

    /// <summary>
    /// Получить элементы
    /// </summary>
    public async Task<IEnumerable<T>> GetItems()
    {
        var query = sqlProvider.GetSelectQuery();
        using var conn = connectionProvider.GetDefaultConnection();
        return await conn.QueryAsync<T>(query);
    }

    /// <summary>
    /// Добавить элемент
    /// </summary>
    public async Task<int> AddItem(T item)
    {
        var query = sqlProvider.GetInsertOrUpdateQuery();
        using var conn = connectionProvider.GetDefaultConnection();
        return await conn.ExecuteAsync(query, item);
    }

    /// <summary>
    /// Добавить элементы
    /// </summary>
    public async Task<IEnumerable<int>> AddItems(IEnumerable<T> items)
    {
        return await Task.WhenAll(items.Select(AddItem));
    }

    /// <summary>
    /// Обновить элемент
    /// </summary>
    public async Task UpdateItem(T item)
    {
        var query = sqlProvider.GetUpdateByKeyQuery();
        using var conn = connectionProvider.GetDefaultConnection();
        await conn.ExecuteAsync(query, item);
    }

    /// <summary>
    /// Обновить элементы
    /// </summary>
    public async Task UpdateItems(IEnumerable<T> items)
    {
        await Task.WhenAll(items.Select(UpdateItem));
    }

    /// <summary>
    /// Удалить элемент
    /// </summary>
    public async Task DeleteItem(int id)
    {
        var query = sqlProvider.GetDeleteByKeyQuery();
        using var conn = connectionProvider.GetDefaultConnection();
        await conn.ExecuteAsync(query, new { id });
    }

    /// <summary>
    /// Удалить элементы
    /// </summary>
    public async Task DeleteItems(IEnumerable<int> ids)
    {
        await Task.WhenAll(ids.Select(DeleteItem));
    }
}
