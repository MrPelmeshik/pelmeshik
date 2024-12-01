using Utility.Extensions;
using Utility.Models;

namespace Utility.Providers;

public static class SqlProvider
{
    /*public SqlProvider()
    {
        if (_properties.Length == 0) 
            throw new ArgumentException($"Модель {typeof(TSource)} не содержит свойств");

        var duplicates = _properties
            .GetColumnNames()
            .GroupBy(c => c)
            .Where(g => g.Count() > 1)
            .ToArray();
        if (duplicates.Length > 0) 
            throw new ArgumentException($"Модель {typeof(TSource)} содержит дублирующиеся свойства: {string.Join(", ", duplicates.Select(d => d.Key))}");
    }*/
    
    /// <summary>
    /// Построить запрос на чтение
    /// </summary>
    public static Query GetSelectQuery<TSource>()
    {
        return new Query($"""
                          select {string.Join(", ", typeof(TSource).GetProperties().Select(p => $"{p.GetColumnName()} as {p.Name}"))}
                          from {typeof(TSource).GetFullTableName()}
                          """);
    }
    
    /// <summary>
    /// Построить запрос на чтение
    /// </summary>
    public static Query GetSelectByKeyQuery<TSource, TKey>(TKey key)
    {
        var keyProperties = typeof(TKey).GetProperties();
        var filterCondition = string.Join(" and ", keyProperties.Select(p => $"{p.GetColumnName()} = :{p.Name}"));
        var sql = $"{GetSelectQuery<TSource>().Sql} where {filterCondition}";
        var parameters = keyProperties.ToDictionary(p => p.Name, p => p.GetValue(key));
        
        return new Query(sql, parameters);
    }
    
    /// <summary>
    /// Построить запрос на чтение
    /// </summary>
    public static Query GetSelectByKeyQuery<TSource>(TSource key)
    {
        var keyProperties = typeof(TSource).GetProperties().GetKeyProperties();
        var filterCondition = string.Join(" and ", keyProperties.Select(p => $"{p.GetColumnName()} = :{p.Name}"));
        var sql = $"{GetSelectQuery<TSource>().Sql} where {filterCondition}";
        var parameters = keyProperties.ToDictionary(p => p.Name, p => p.GetValue(key));
        
        return new Query(sql, parameters);
    }
    
    /// <summary>
    /// Построить запрос на вставку
    /// </summary>
    public static Query GetInsertQuery<TSource>(TSource item)
    {
        var nonReadOnlyProperties = typeof(TSource).GetProperties().GetNonReadOnlyProperties();
        var sql = $"""
                   insert into {typeof(TSource).GetFullTableName()} ({string.Join(", ", nonReadOnlyProperties.GetColumnNames())})
                   values ({string.Join(", ", nonReadOnlyProperties.Select(p => $":{p.Name}"))})
                   """;
        var parameters = nonReadOnlyProperties.ToDictionary(p => p.Name, p => p.GetValue(item));
        
        return new Query(sql, parameters);
    }

    /// <summary>
    /// Построить запрос на обновление
    /// </summary>
    public static Query GetUpdateQuery<TSource>(TSource item)
    {
        var properties = typeof(TSource).GetProperties();
        var nonReadOnlyProperties = properties.GetNonReadOnlyProperties();
        var keyProperties = properties.GetKeyProperties();
        var sql = $"""
                   update {typeof(TSource).GetFullTableName()}
                   set {string.Join(", ", nonReadOnlyProperties.Select(p => $"{p.GetColumnName()} = :{p.Name}"))}
                   where {string.Join(" and ", keyProperties.Select(p => $"{p.GetColumnName()} = :{p.Name}"))}
                   """;
        var parameters = nonReadOnlyProperties.ToDictionary(p => p.Name, p => p.GetValue(item));
        
        return new Query(sql, parameters);
    }
    
    /// <summary>
    /// Построить запрос на вставку
    /// </summary>
    public static Query GetInsertOrUpdateQuery<TSource>(TSource item)
    {
        var properties = typeof(TSource).GetProperties();
        var keyProperties = properties.GetKeyProperties();
        var nonReadOnlyProperties = properties.GetNonReadOnlyProperties();
        var insertQuery = GetInsertQuery(item);
        var sql = $"""
                   {insertQuery.Sql}
                   on conflict ({string.Join(", ", keyProperties.GetColumnNames())})
                   do update set {string.Join(", ", nonReadOnlyProperties.Select(p => $"{p.GetColumnName()} = :{p.Name}"))}
                   """;
        var parameters = insertQuery.Parameters;
        
        return new Query(sql, parameters);
    }
    
    /// <summary>
    /// Построить запрос на удаление
    /// </summary>
    public static Query GetDeleteQuery<TSource, TKey>(TKey key)
    {
        var keyProperties = typeof(TKey).GetProperties();
        var sql = $"""
                   delete from {typeof(TSource).GetFullTableName()}
                   where {string.Join(" and ", keyProperties.Select(p => $"{p.GetColumnName()} = :{p.Name}"))}
                   """;
        var parameters = keyProperties.ToDictionary(p => p.Name, p => p.GetValue(key));
        
        return new Query(sql, parameters);
    }
    
    /// <summary>
    /// Построить запрос на удаление
    /// </summary>
    public static Query GetDeleteQuery<TSource>(TSource key)
    {
        var keyProperties = typeof(TSource).GetProperties().GetKeyProperties();
        var sql = $"""
                   delete from {typeof(TSource).GetFullTableName()}
                   where {string.Join(" and ", keyProperties.Select(p => $"{p.GetColumnName()} = :{p.Name}"))}
                   """;
        var parameters = keyProperties.ToDictionary(p => p.Name, p => p.GetValue(key));
        
        return new Query(sql, parameters);
    }
}