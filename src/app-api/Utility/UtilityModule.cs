using Microsoft.Extensions.DependencyInjection;
using Utility.Providers;

namespace Utility;

public class UtilityModule
{
    public static void Init(IServiceCollection serviceCollection)
    {
        serviceCollection.AddSingleton<ConnectionProvider>();
    }
}