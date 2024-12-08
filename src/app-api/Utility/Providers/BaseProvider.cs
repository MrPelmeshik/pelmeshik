using System.Data;
using Dapper;
using Microsoft.Extensions.Logging;
using Utility.Interfaces;
using Utility.Models;

namespace Utility.Providers;

/// <summary>
/// Базовый провайдер
/// </summary>
public class BaseProvider<TSource>(ILogger<BaseProvider<TSource>> logger) where TSource : IItemKey
{
    /// <summary>
    /// Получить элемент по идентификатору
    /// </summary>
    public async Task<TSource?> GetItem(IDbConnection conn, TSource item, IDbTransaction? tr = null)
    {
        var query = SqlProvider.GetSelectByKeyQuery(item);
        return await conn.QueryFirstOrDefaultAsync<TSource>(query.Sql, query.Parameters, tr);
    }

    /// <summary>
    /// Получить элементы
    /// </summary>
    public async Task<IEnumerable<TSource>> GetItems(IDbConnection conn, IDbTransaction? tr = null)
    {
        var query = SqlProvider.GetSelectQuery<TSource>();
        return await conn.QueryAsync<TSource>(query.Sql, query.Parameters, tr);
    }

    /// <summary>
    /// Добавить элемент
    /// </summary>
    public async Task<int> AddItem(IDbConnection conn, TSource item, IDbTransaction? tr = null)
    {
        TrySetUpdateDate(item);
        var query = SqlProvider.GetInsertQuery(item);
        return await conn.ExecuteAsync(query.Sql, query.Parameters, tr);
    }

    /// <summary>
    /// Обновить элемент
    /// </summary>
    public async Task UpdateItem(IDbConnection conn, TSource item, IDbTransaction? tr = null)
    {
        TrySetUpdateDate(item);
        var query = SqlProvider.GetUpdateQuery(item);
        await conn.ExecuteAsync(query.Sql, query.Parameters, tr);
    }

    /// <summary>
    /// Удалить элемент
    /// </summary>
    public async Task DeleteItem(IDbConnection conn, TSource item, IDbTransaction? tr = null)
    {
        var query = SqlProvider.GetDeleteQuery(item);
        await conn.ExecuteAsync(query.Sql, query.Parameters, tr);
    }
    
    /// <summary>
    /// Добавить или обновить элемент
    /// </summary>
    public async Task<int> AddOrUpdateItem(IDbConnection conn, TSource item, IDbTransaction? tr = null)
    {
        TrySetUpdateDate(item);
        var query = SqlProvider.GetInsertOrUpdateQuery(item);
        return await conn.ExecuteAsync(query.Sql, query.Parameters, tr);
    }

    private void TrySetUpdateDate(TSource item)
    {
        if (item is IItemUpdateDate date)
        {
            date.UpdateDate = DateTime.UtcNow;
        }
    }
}
