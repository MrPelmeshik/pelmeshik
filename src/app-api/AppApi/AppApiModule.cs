using Finance;
using Utility;

namespace AppApi;

public static class AppApiModule
{
    public static void Init(IServiceCollection collection)
    {
        FinanceModule.Init(collection);
        UtilityModule.Init(collection);
    }
}