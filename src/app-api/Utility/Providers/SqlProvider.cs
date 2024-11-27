using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Reflection;
using Utility.Extensions;

namespace Utility.Providers;

public class SqlProvider<T>
{
    /// <summary>
    /// Свойства
    /// </summary>
    public readonly PropertyInfo[] Properties = typeof(T).GetProperties();
    
    /// <summary>
    /// Полное название таблицы
    /// </summary>
    public readonly string FullTableName = typeof(T).GetFullTableName();
    

    /// <summary>
    /// Построить запрос на чтение
    /// </summary>
    public string GetSelectQuery()
    {
        return $"""
                select {string.Join(", ", Properties.Select(p => $"{p.GetColumnName()} as {p.Name}"))}
                from {FullTableName}
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
                insert into {FullTableName} ({string.Join(", ", Properties.GetNonKeyProperties().GetNonReadonlyProperties().GetColumnNames())})
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
                delete from {FullTableName}
                where {string.Join(" and ", Properties.GetKeyProperties().Select(p => $"{p.GetColumnName()} = :{p.Name}"))}
                """;
    }
    
    /// <summary>
    /// Построить запрос на обновление
    /// </summary>
    public string GetUpdateByKeyQuery()
    {
        return $"""
                update {FullTableName}
                set {string.Join(", ", Properties.GetNonKeyProperties().GetNonReadonlyProperties().Select(p => $"{p.GetColumnName()} = :{p.Name}"))}
                where {string.Join(" and ", Properties.GetKeyProperties().Select(p => $"{p.GetColumnName()} = :{p.Name}"))}
                """;
    }
}