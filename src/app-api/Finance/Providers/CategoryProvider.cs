using Finance.Models;
using Microsoft.Extensions.Logging;
using Utility;
using Utility.Providers;

namespace Finance.Providers;

public class CategoryProvider(
    ILogger<CategoryProvider> logger,
    ConnectionProvider connectionProvider,
    SqlProvider<Category> sqlProvider
    ) : BaseProvider<Category>(logger, connectionProvider, sqlProvider);