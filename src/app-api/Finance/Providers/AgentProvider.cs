using Finance.Models;
using Microsoft.Extensions.Logging;
using Utility;
using Utility.Providers;

namespace Finance.Providers;

public class AgentProvider(
    ILogger<AgentProvider> logger,
    ConnectionProvider connectionProvider,
    SqlProvider<Agent> sqlProvider
    ) : BaseProvider<Agent>(logger, connectionProvider, sqlProvider);