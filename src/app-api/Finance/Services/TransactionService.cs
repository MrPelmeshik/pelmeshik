using Finance.Models;
using Finance.Providers;
using Microsoft.Extensions.Logging;
using Utility.Interfaces;
using Utility.Providers;

namespace Finance.Services;

public class TransactionService(
    ILogger<TransactionService> logger, 
    BaseProvider<TransactionModel> provider,
    Transaction2TagProvider transaction2TagProvider,
    ConnectionProvider connectionProvider) 
    : IService<TransactionModel>
{
    public async Task<TransactionModel?> GetItem(TransactionModel item)
    {
        using var conn = connectionProvider.GetDefaultConnection();
        
        var transaction = await provider.GetItem(conn, item);
        if (transaction != null && item.Id != null)
        {
            transaction.TagIds = (await transaction2TagProvider.GetByTransactionId(conn, (int)item.Id))
                .Select(transaction2Tag => transaction2Tag.TagId);
        }
        
        return transaction;
    }

    public async Task<IEnumerable<TransactionModel>> GetItems()
    {
        using var conn = connectionProvider.GetDefaultConnection();
        
        var transactionsTags = (await transaction2TagProvider.GetItems(conn))
            .GroupBy(transaction2Tag => transaction2Tag.TransactionId)
            .ToDictionary(
                grouping => grouping.Key, 
                grouping => grouping
                    .Select(transaction2Tag => transaction2Tag.TagId)
                    .ToList());
        
        return (await provider.GetItems(conn))
            .Select(transaction =>
            {
                transaction.TagIds = transactionsTags
                    .FirstOrDefault(transactionTags => transactionTags.Key == transaction.Id)
                    .Value;
                return transaction;
                
            });
    }

    public async Task<int> AddItem(TransactionModel item)
    {
        using var conn = connectionProvider.GetDefaultConnection();
        conn.Open();
        var tr = conn.BeginTransaction();
        try
        {
            var id = await provider.AddItem(conn, item, tr);
            if (id > 0)
            {
                await transaction2TagProvider.UpdateItemByTransactionId(
                    conn,
                    id,
                    item.TagIds ?? new List<int>(),
                    tr);
            }

            tr.Commit();
            return id;
        }
        catch
        {
            tr.Rollback();
            throw;
        }
    }

    public async Task UpdateItem(TransactionModel item)
    {
        using var conn = connectionProvider.GetDefaultConnection();
        conn.Open();
        var tr = conn.BeginTransaction();
        try
        {
            if (item is { Id: not null, TagIds: not null })
            {
                await transaction2TagProvider.UpdateItemByTransactionId(
                    conn,
                    (int)item.Id,
                    item.TagIds ?? new List<int>(),
                    tr);
            }

            await provider.UpdateItem(conn, item, tr);

            tr.Commit();
        }
        catch
        {
            tr.Rollback();
            throw;
        }
    }

    public async Task DeleteItem(TransactionModel item)
    {
        using var conn = connectionProvider.GetDefaultConnection();
        await provider.DeleteItem(conn, item);
    }

    public Task<int> AddOrUpdateItem(TransactionModel item)
    {
        throw new NotImplementedException();
    }
}