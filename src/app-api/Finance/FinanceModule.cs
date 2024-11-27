using Finance.Models;
using Microsoft.Extensions.DependencyInjection;
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

    private static void RegisterBaseCase<T>(this IServiceCollection collection)
    {
        collection.AddTransient<BaseProvider<T>>();
        collection.AddTransient<SqlProvider<T>>();
        collection.AddTransient<BaseService<T>>();
    }
}