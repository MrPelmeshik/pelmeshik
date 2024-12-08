using Dapper;
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
    public async Task<TransactionModel?> GetItem(TransactionModel key)
    {
        using var conn = connectionProvider.GetDefaultConnection();
        
        var transaction = await provider.GetItem(conn, key);
        if (transaction != null && key.Id != null)
        {
            transaction.TagIds = (await transaction2TagProvider.GetByTransactionId(conn, (int)key.Id))
                .Select(transaction2Tag => transaction2Tag.TagId);
        }
        
        return transaction;
    }

    public async Task<IEnumerable<TransactionModel>> GetItems()
    {
        var (transactions, transactions2Tags) = await GetTransactions();
        
        var transactionsTags = transactions2Tags
            .GroupBy(transaction2Tag => transaction2Tag.TransactionId)
            .ToDictionary(
                grouping => grouping.Key, 
                grouping => grouping
                    .Select(transaction2Tag => transaction2Tag.TagId)
                    .ToList());
        
        return transactions
            .Select(transaction =>
            {
                transaction.TagIds = transactionsTags
                    .FirstOrDefault(transactionTags => transactionTags.Key == transaction.Id)
                    .Value;
                return transaction;
                
            });
    }

    public Task<int> AddItem(TransactionModel item)
    {
        throw new NotImplementedException();
    }

    public Task UpdateItem(TransactionModel item)
    {
        throw new NotImplementedException();
    }

    public Task DeleteItem(TransactionModel key)
    {
        throw new NotImplementedException();
    }

    public Task<int> AddOrUpdateItem(TransactionModel item)
    {
        throw new NotImplementedException();
    }

    private async Task<(IEnumerable<TransactionModel>, IEnumerable<Transaction2TagModel>)> GetTransactions()
    {
        using var conn = connectionProvider.GetDefaultConnection();
        
        conn.Open();
        
        var transactions2TagsTask = transaction2TagProvider.GetItems(conn);
        var transactionsTask = provider.GetItems(conn);
        
        var transactions = await transactionsTask;
        var transactions2Tags = await transactions2TagsTask;
        
        return (transactions, transactions2Tags);
    }
}