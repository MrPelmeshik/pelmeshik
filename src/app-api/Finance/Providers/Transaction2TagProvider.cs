using System.Data;
using Dapper;
using Finance.Models;
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
}