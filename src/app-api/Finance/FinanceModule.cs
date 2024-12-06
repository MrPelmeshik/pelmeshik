using Finance.Models;
using Microsoft.Extensions.DependencyInjection;
using Utility.Interfaces;
using Utility.Providers;
using Utility.Services;

namespace Finance;

public static class FinanceModule
{
    public static void Init(IServiceCollection collection)
    {
        collection.RegisterBaseCase<Agent, SimpleKeyIntId>();
        collection.RegisterBaseCase<Card, SimpleKeyIntId>();
        collection.RegisterBaseCase<Category, SimpleKeyIntId>();
        collection.RegisterBaseCase<Tag, SimpleKeyIntId>();
        collection.RegisterBaseCase<Transaction, SimpleKeyIntId>();
        collection.RegisterBaseCase<TransactionFrequency, SimpleKeyIntId>();
    }

    private static void RegisterBaseCase<TSource, TKey>(
        this IServiceCollection collection
        ) where TKey : IItemKey where TSource : TKey
    {
        collection.AddTransient<BaseProvider<TSource, TKey>>();
        collection.AddTransient<BaseService<TSource, TKey>>();
    }
}