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

    public SqlProvider()
    {
        if (Properties.Length == 0) 
            throw new ArgumentException($"Модель {typeof(T)} не содержит свойств");

        var duplicates = Properties
            .GetColumnNames()
            .GroupBy(c => c)
            .Where(g => g.Count() > 1)
            .ToArray();
        if (duplicates.Length > 0) 
            throw new ArgumentException($"Модель {typeof(T)} содержит дублирующиеся свойства: {string.Join(", ", duplicates.Select(d => d.Key))}");
    }


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
                insert into {FullTableName} ({string.Join(", ", Properties.GetNonKeyProperties().GetColumnNames())})
                values ({string.Join(", ", Properties.GetNonKeyProperties().Select(p => $":{p.Name}"))})
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
                do update set {string.Join(", ", Properties.GetNonKeyProperties().Select(p => $"{p.GetColumnName()} = :{p.Name}"))}
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
                set {string.Join(", ", Properties.GetNonKeyProperties().Select(p => $"{p.GetColumnName()} = :{p.Name}"))}
                where {string.Join(" and ", Properties.GetKeyProperties().Select(p => $"{p.GetColumnName()} = :{p.Name}"))}
                """;
    }
}