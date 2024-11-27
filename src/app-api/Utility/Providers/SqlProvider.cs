using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Reflection;

namespace Utility.Providers;

public class SqlProvider<T>
{
    /// <summary>
    /// название таблицы БД
    /// </summary>
    public readonly string TableName = typeof(T).GetCustomAttribute<TableAttribute>()?.Name  
                                               ?? throw new Exception("Не указано имя таблицы");
    
    /// <summary>
    /// Название схемы БД
    /// </summary>
    public readonly string SchemaName = typeof(T).GetCustomAttribute<TableAttribute>()?.Schema 
                                               ?? throw new Exception("Не указана имя схемы");
    
    /// <summary>
    /// Свойства
    /// </summary>
    public readonly PropertyInfo[] Properties = typeof(T).GetProperties();

    /// <summary>
    /// Построить запрос на чтение
    /// </summary>
    public string GetSelectQuery()
    {
        return $"""
                select {string.Join(", ", Properties.Select(p => $"{p.GetColumnName()} as {p.Name}"))}
                from {SchemaName}.{TableName}
                """;
    }

    /// <summary>
    /// Построить запрос на чтение
    /// </summary>
    public string GetSelectByKeyQuery()
    {
        return $"""
                {GetSelectQuery()}
                where {string.Join(" and ", Properties.GetKeyProperties().Select(p => $"{p.GetColumnName()} = :{p.Name}"))}
                """;
    }
    
    /// <summary>
    /// Построить запрос на вставку
    /// </summary>
    public string GetInsertQuery()
    {
        return $"""
                insert into {SchemaName}.{TableName} ({string.Join(", ", Properties.GetNonKeyProperties().GetNonReadonlyProperties().GetColumnNames())})
                values ({string.Join(", ", Properties.Select(p => $":{p.Name}"))})
                """;
    }
    
    /// <summary>
    /// Построить запрос на вставку
    /// </summary>
    public string GetInsertOrUpdateQuery()
    {
        return $"""
                {GetInsertQuery()}
                on conflict ({string.Join(", ", Properties.GetKeyProperties().GetColumnNames())})
                do update set {string.Join(", ", Properties.GetNonKeyProperties().GetNonReadonlyProperties().Select(p => $"{p.GetColumnName()} = :{p.Name}"))}
                """;
    }
    
    /// <summary>
    /// Построить запрос на удаление
    /// </summary>
    public string GetDeleteByKeyQuery()
    {
        return $"""
                delete from {SchemaName}.{TableName}
                where {string.Join(" and ", Properties.GetKeyProperties().Select(p => $"{p.GetColumnName()} = :{p.Name}"))}
                """;
    }
    
    /// <summary>
    /// Построить запрос на обновление
    /// </summary>
    public string GetUpdateByKeyQuery()
    {
        return $"""
                update {SchemaName}.{TableName}
                set {string.Join(", ", Properties.GetNonKeyProperties().GetNonReadonlyProperties().Select(p => $"{p.GetColumnName()} = :{p.Name}"))}
                where {string.Join(" and ", Properties.GetKeyProperties().Select(p => $"{p.GetColumnName()} = :{p.Name}"))}
                """;
    }
}