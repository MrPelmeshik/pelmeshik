using System.Data;
using Dapper;
using Microsoft.Extensions.Logging;
using Utility.Interfaces;
using Utility.Models;

namespace Utility.Providers;

/// <summary>
/// Базовый провайдер
/// </summary>
public class BaseProvider<TSource, TKey>(ILogger<BaseProvider<TSource, TKey>> logger) where TKey : IItemKey where TSource : TKey
{
    /// <summary>
    /// Получить элемент по идентификатору
    /// </summary>
    public async Task<TSource?> GetItem(IDbConnection conn, TKey key)
    {
        var query = SqlProvider.GetSelectByKeyQuery<TSource, TKey>(key);
        return await conn.QueryFirstOrDefaultAsync<TSource>(query.Sql, query.Parameters);
    }

    /// <summary>
    /// Получить элементы
    /// </summary>
    public async Task<IEnumerable<TSource>> GetItems(IDbConnection conn)
    {
        var query = SqlProvider.GetSelectQuery<TSource>();
        return await conn.QueryAsync<TSource>(query.Sql, query.Parameters);
    }

    /// <summary>
    /// Добавить элемент
    /// </summary>
    public async Task<int> AddItem(IDbConnection conn, TSource item)
    {
        var query = SqlProvider.GetInsertQuery<TSource>(item);
        return await conn.ExecuteAsync(query.Sql, query.Parameters);
    }

    /// <summary>
    /// Добавить элементы
    /// </summary>
    public async Task<IEnumerable<int>> AddItems(IDbConnection conn, IEnumerable<TSource> items)
    {
        throw new NotImplementedException();
    }

    /// <summary>
    /// Обновить элемент
    /// </summary>
    public async Task UpdateItem(IDbConnection conn, TSource item)
    {
        var query = SqlProvider.GetUpdateQuery(item);
        await conn.ExecuteAsync(query.Sql, query.Parameters);
    }

    /// <summary>
    /// Обновить элементы
    /// </summary>
    public async Task UpdateItems(IDbConnection conn, IEnumerable<TSource> items)
    {
        throw new NotImplementedException();
    }

    /// <summary>
    /// Удалить элемент
    /// </summary>
    public async Task DeleteItem(IDbConnection conn, TKey key)
    {
        var query = SqlProvider.GetDeleteQuery<TSource, TKey>(key);
        await conn.ExecuteAsync(query.Sql, query.Parameters);
    }

    /// <summary>
    /// Удалить элементы
    /// </summary>
    public async Task DeleteItems(IDbConnection conn, IEnumerable<TKey> keys)
    {
        throw new NotImplementedException();
    }
    
    /// <summary>
    /// Добавить или обновить элемент
    /// </summary>
    public async Task<int> AddOrUpdateItem(IDbConnection conn, TSource item)
    {
        var query = SqlProvider.GetInsertOrUpdateQuery(item);
        return await conn.ExecuteAsync(query.Sql, query.Parameters);
    }
}
