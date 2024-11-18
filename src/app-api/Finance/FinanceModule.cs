using Finance.Models;
using Finance.Providers;
using Microsoft.Extensions.DependencyInjection;
using Utility;
using Utility.Interfaces;
using Utility.Providers;

namespace Finance;

public static class FinanceModule
{
    public static void Init(IServiceCollection collection)
    {
        collection.RegisterBaseProvider<Agent, AgentProvider>();
        collection.RegisterBaseProvider<Card, CardProvider>();
        collection.RegisterBaseProvider<Category, CategoryProvider>();
        collection.RegisterBaseProvider<Tag, TagProvider>();
        collection.RegisterBaseProvider<Transaction, TransactionProvider>();
        collection.RegisterBaseProvider<TransactionFrequency, TransactionFrequencyProvider>();
    }

    private static void RegisterBaseProvider<T, TProvider>(this IServiceCollection collection) where TProvider : BaseProvider<T>
    {
        collection.AddTransient<BaseProvider<T>, TProvider>();
        collection.AddTransient<SqlProvider<T>>();
    }
}