using Finance.Models;
using Microsoft.Extensions.Logging;
using Utility;
using Utility.Providers;

namespace Finance.Providers;

public class TransactionProvider(
    ILogger<TransactionProvider> logger,
    ConnectionProvider connectionProvider,
    SqlProvider<Transaction> sqlProvider
    ) : BaseProvider<Transaction>(logger, connectionProvider, sqlProvider);