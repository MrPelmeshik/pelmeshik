using Finance.Models;
using Microsoft.Extensions.Logging;
using Utility;
using Utility.Providers;

namespace Finance.Providers;

public class CardProvider(
    ILogger<CardProvider> logger,
    ConnectionProvider connectionProvider,
    SqlProvider<Card> sqlProvider
    ) : BaseProvider<Card>(logger, connectionProvider, sqlProvider);