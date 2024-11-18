using Finance.Models;
using Microsoft.Extensions.Logging;
using Utility;
using Utility.Providers;

namespace Finance.Providers;

public class TransactionFrequencyProvider(
    ILogger<TransactionFrequencyProvider> logger,
    ConnectionProvider connectionProvider,
    SqlProvider<TransactionFrequency> sqlProvider
    ) : BaseProvider<TransactionFrequency>(logger, connectionProvider, sqlProvider);