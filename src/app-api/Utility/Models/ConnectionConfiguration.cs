using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data;
using System.Diagnostics;
using System.Text;
using Npgsql;
using Utility.Interfaces;

namespace Utility.Models;

/// <summary>
/// Конфигурация подключения
/// </summary>
[Table("connection", Schema = "app")]
public class ConnectionConfiguration : IItemId
{
    /// <summary>
    /// Идентификатор
    /// </summary>
    [Key, Column("id")]
    public int Id { get; set; }
    
    /// <summary>
    /// Название
    /// </summary>
    [Column("name")]
    public string? Name { get; set; }
    
    /// <summary>
    /// Хост
    /// </summary>
    [Column("host")]
    public string? Host { get; set; }
    
    /// <summary>
    /// Порт
    /// </summary>
    [Column("port")]
    public string? Port { get; set; }
    
    /// <summary>
    /// База данных
    /// </summary>
    [Column("database")]
    public string? Database { get; set; }
    
    /// <summary>
    /// Логин
    /// </summary>
    [Column("login")]
    public string? Login { get; set; }
    
    /// <summary>
    /// Пароль
    /// </summary>
    [Column("password")]
    public string? Password { get; set; }
    
    /// <summary>
    /// Источник
    /// </summary>
    [Column("source")]
    public string? Source { get; set; }
    
    /// <summary>
    /// Тип подключения
    /// </summary>
    /// <exception cref="ArgumentException">Неизвестный источник</exception>
    private SourceTypeEnum SourceType
    {
        get
        {
            return Source switch
            {
                "postgresql" => SourceTypeEnum.Postgresql,
                "clickhouse" => SourceTypeEnum.Clickhouse,
                _ => throw new ArgumentException($"Неизвестный источник: {Source}")
            };
        }
    }

    /// <summary>
    /// Получить подключение
    /// </summary>
    public IDbConnection GetConnection()
    {
        var connectionString = new List<string>();
        switch (SourceType)
        {
            case SourceTypeEnum.Postgresql:
                SetConnectionParam(connectionString, "Host", Host, nameof(Host));
                SetConnectionParam(connectionString, "Port", Port, nameof(Port));
                SetConnectionParam(connectionString, "Database", Database, nameof(Database));
                SetConnectionParam(connectionString, "User Id", Login, nameof(Login));
                SetConnectionParam(connectionString, "Password", Password, nameof(Password));
                return new NpgsqlConnection(string.Join(";", connectionString));
            default:
                throw new ArgumentException($"Неизвестный источник: {Source}");
        }
    }
    
    /// <summary>
    /// Установить параметр
    /// </summary>
    /// <param name="connectionString">Строка подключения</param>
    /// <param name="paramName">Параметр</param>
    /// <param name="value">Значение</param>
    /// <param name="nameReqParam">Наименование обязательного параметра</param>
    /// <typeparam name="T">Тип значения</typeparam>
    /// <exception cref="ArgumentNullException">Не указан обязательный параметр</exception>
    private static void SetConnectionParam<T>(in IList<string> connectionString, string paramName, T value, string? nameReqParam = null)
    {
        if (value == null && nameReqParam == null) return;
        
        connectionString.Add(string.IsNullOrEmpty(nameReqParam)
            ? $"{paramName}={value}"
            : $"{paramName}={value ?? throw new ArgumentNullException(nameReqParam)}");
    }
}                               