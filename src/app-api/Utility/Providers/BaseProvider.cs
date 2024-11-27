using System.Data;
using Dapper;
using Microsoft.Extensions.Logging;

namespace Utility.Providers;

/// <summary>
/// Базовый провайдер
/// </summary>
public class BaseProvider<T>(SqlProvider<T> sqlProvider)
{
    /// <summary>
    /// Получить элемент по идентификатору
    /// </summary>
    public async Task<T?> GetItem(IDbConnection conn, int id)
    {
        var query = sqlProvider.GetSelectByKeyQuery();
        return await conn.QueryFirstOrDefaultAsync<T>(query, new { id });
    }

    /// <summary>
    /// Получить элементы
    /// </summary>
    public async Task<IEnumerable<T>> GetItems(IDbConnection conn)
    {
        var query = sqlProvider.GetSelectQuery();
        return await conn.QueryAsync<T>(query);
    }

    /// <summary>
    /// Добавить элемент
    /// </summary>
    public async Task<int> AddItem(IDbConnection conn, T item)
    {
        var query = sqlProvider.GetInsertOrUpdateQuery();
        return await conn.ExecuteAsync(query, item);
    }

    /// <summary>
    /// Добавить элементы
    /// </summary>
    public async Task<IEnumerable<int>> AddItems(IDbConnection conn, IEnumerable<T> items)
    {
        throw new NotImplementedException();
    }

    /// <summary>
    /// Обновить элемент
    /// </summary>
    public async Task UpdateItem(IDbConnection conn, T item)
    {
        var query = sqlProvider.GetUpdateByKeyQuery();
        await conn.ExecuteAsync(query, item);
    }

    /// <summary>
    /// Обновить элементы
    /// </summary>
    public async Task UpdateItems(IDbConnection conn, IEnumerable<T> items)
    {
        throw new NotImplementedException();
    }

    /// <summary>
    /// Удалить элемент
    /// </summary>
    public async Task DeleteItem(IDbConnection conn, int id)
    {
        var query = sqlProvider.GetDeleteByKeyQuery();
        await conn.ExecuteAsync(query, new { id });
    }

    /// <summary>
    /// Удалить элементы
    /// </summary>
    public async Task DeleteItems(IDbConnection conn, IEnumerable<int> ids)
    {
        throw new NotImplementedException();
    }
}
