using System.ComponentModel.DataAnnotations;
using System.Data;
using Dapper;
using Finance.Models;
using Utility.Extensions;
using Utility.Providers;

namespace Finance.Providers;

public class Transaction2TagProvider
{
    public async Task<IEnumerable<Transaction2TagModel>> GetItems(IDbConnection conn)
    {
        var query = SqlProvider.GetSelectQuery<Transaction2TagModel>();
        return await conn.QueryAsync<Transaction2TagModel>(query.Sql, query.Parameters);
    }

    public async Task<IEnumerable<Transaction2TagModel>> GetByTransactionId(IDbConnection conn, int transactionId)
    {
        // todo: Надо будет сделать фильтрацию на стороне БД
        var allData = await GetItems(conn);
        return allData.Where(item => item.TransactionId == transactionId);
    }

    public async Task UpdateItemByTransactionId(IDbConnection conn, int transactionId, IEnumerable<int> tagIds, IDbTransaction? tr = null)
    {
        var deleteQuery = SqlProvider.GetDeleteQuery<Transaction2TagModel>(
            new Dictionary<string, object>
            {
                {
                    typeof(Transaction2TagModel).GetProperty(nameof(Transaction2TagModel.TransactionId))!.GetColumnName(),
                    transactionId
                }
            });
        await conn.ExecuteAsync(deleteQuery.Sql, deleteQuery.Parameters, tr);

        foreach (var tagId in tagIds)
        {
            var insertQuery = SqlProvider.GetInsertQuery<Transaction2TagModel>(
                new Dictionary<string, object>
                {
                    {
                        typeof(Transaction2TagModel).GetProperty(nameof(Transaction2TagModel.TransactionId))!.GetColumnName(),
                        transactionId
                    },
                    {
                        typeof(Transaction2TagModel).GetProperty(nameof(Transaction2TagModel.TagId))!.GetColumnName(),
                        tagId
                    }
                });
            await conn.ExecuteAsync(insertQuery.Sql, insertQuery.Parameters, tr);
        }
    }
}