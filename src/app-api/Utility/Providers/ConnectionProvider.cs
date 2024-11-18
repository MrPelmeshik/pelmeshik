using System.Data;
using Npgsql;
using Utility.Models;

namespace Utility.Providers;

/// <summary>
/// Провайдер для доступа к данным
/// </summary>
public class ConnectionProvider
{
    /// <summary>
    /// Конфигурации подключений
    /// </summary>
    private IList<ConnectionConfiguration> ConnectionConfigurations { get; set; }
    

    public ConnectionProvider()
    {
        Init();
        
        if (ConnectionConfigurations == null) throw new ArgumentException("Подключения не найдены");
    }

    /// <summary>
    /// Получить подключение
    /// </summary>
    public IDbConnection GetConnection(string connectionName)
    {
        if (string.IsNullOrEmpty(connectionName)) throw new ArgumentNullException(nameof(connectionName));

        var connectionConfiguration = ConnectionConfigurations.FirstOrDefault(connection => connection.Name == connectionName) 
                                      ?? throw new ArgumentException($"Подключение не найдено: {connectionName}");
        return connectionConfiguration.GetConnection();
    }
    
    /// <summary>
    /// Получить подключение по умолчанию
    /// </summary>
    public IDbConnection GetDefaultConnection() => GetConnection("default");

    private void Init()
    {
        ConnectionConfigurations = new List<ConnectionConfiguration>
        {
            new ConnectionConfiguration
            {
                Id = 0,
                Name = "default",
                Host = "postgres",
                Port = "5432",
                Database = "test_db",
                Login = "postgres",
                Password = GetEnvVariable("PG_PWD_PG"),
                Source = "postgresql",
            }
        };
    }
    
    private string GetEnvVariable(string name)
    {
        return Environment.GetEnvironmentVariable(name) 
               ?? throw new ArgumentException($"Переменная окружения не найдена: {name}");
    }
}