using Finance.Models;
using Microsoft.Extensions.DependencyInjection;
using Utility.Interfaces;
using Utility.Models;
using Utility.Providers;
using Utility.Services;

namespace Finance;

public static class FinanceModule
{
    public static void Init(IServiceCollection collection)
    {
        collection.RegisterBaseCase<Agent>();
        collection.RegisterBaseCase<Card>();
        collection.RegisterBaseCase<Category>();
        collection.RegisterBaseCase<Tag>();
        collection.RegisterBaseCase<Transaction>();
        collection.RegisterBaseCase<TransactionFrequency>();
    }

    private static void RegisterBaseCase<TSource>(
        this IServiceCollection collection
        ) where TSource : IItemKey
    {
        collection.AddTransient<BaseProvider<TSource>>();
        collection.AddTransient<BaseService<TSource>>();
    }
}