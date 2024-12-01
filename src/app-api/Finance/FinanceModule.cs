using Finance.Models.Agent;
using Finance.Models.Card;
using Finance.Models.Category;
using Finance.Models.Tag;
using Finance.Models.Transaction;
using Finance.Models.TransactionFrequency;
using Microsoft.Extensions.DependencyInjection;
using Utility.Interfaces;
using Utility.Providers;
using Utility.Services;

namespace Finance;

public static class FinanceModule
{
    public static void Init(IServiceCollection collection)
    {
        collection.RegisterBaseCase<AgentModel, AgentKey>();
        collection.RegisterBaseCase<CardModel, CardKey>();
        collection.RegisterBaseCase<CategoryModel, CategoryKey>();
        collection.RegisterBaseCase<TagModel, TagKey>();
        collection.RegisterBaseCase<TransactionModel, TransactionKey>();
        collection.RegisterBaseCase<TransactionFrequencyModel, TransactionFrequencyKey>();
    }

    private static void RegisterBaseCase<TSource, TKey>(
        this IServiceCollection collection
        ) where TKey : IItemKey where TSource : TKey
    {
        collection.AddTransient<BaseProvider<TSource, TKey>>();
        collection.AddTransient<BaseService<TSource, TKey>>();
    }
}