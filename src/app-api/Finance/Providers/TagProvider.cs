using Finance.Models;
using Microsoft.Extensions.Logging;
using Utility;
using Utility.Providers;

namespace Finance.Providers;

public class TagProvider(
    ILogger<TagProvider> logger,
    ConnectionProvider connectionProvider,
    SqlProvider<Tag> sqlProvider
    ) : BaseProvider<Tag>(logger, connectionProvider, sqlProvider);