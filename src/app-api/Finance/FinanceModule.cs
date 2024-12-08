using Finance.Models;
using Finance.Providers;
using Finance.Services;
using Microsoft.Extensions.DependencyInjection;
using Utility.Interfaces;
using Utility.Providers;
using Utility.Services;

namespace Finance;

public static class FinanceModule
{
    public static void Init(IServiceCollection collection)
    {
        collection.RegisterBaseCase<Transaction>();
        
        collection.RegisterBaseCase<AgentModel>();
        collection.RegisterBaseCase<CardModel>();
        collection.RegisterBaseCase<CategoryModel>();
        collection.RegisterBaseCase<TagModel>();
        collection.RegisterBaseCase<TransactionFrequencyModel>();
    }

    private static void RegisterBaseCase<TSource>(
        this IServiceCollection collection
        ) where TSource : IItemKey
    {
        collection.AddTransient<BaseProvider<TSource>>();
        collection.AddTransient<IService<TSource>, BaseService<TSource>>();
    }
    
    private static void RegisterBaseCase<TSource, TService>(
        this IServiceCollection collection
    ) where TSource : IItemKey where TService : class, IService<TSource>
    {
        collection.AddTransient<BaseProvider<TSource>>();
        collection.AddTransient<IService<TSource>, TService>();
    }
}