using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Reflection;

namespace Utility.Providers;

public class SqlProvider<T>
{
    /// <summary>
    /// название таблицы БД
    /// </summary>
    public static readonly string TableName = typeof(T).GetCustomAttribute<TableAttribute>()?.Name  
                                               ?? throw new Exception("Не указано имя таблицы");
    
    /// <summary>
    /// Название схемы БД
    /// </summary>
    public static readonly string SchemaName = typeof(T).GetCustomAttribute<TableAttribute>()?.Schema 
                                               ?? throw new Exception("Не указана имя схемы");
    
    /// <summary>
    /// Свойства
    /// </summary>
    public static readonly PropertyInfo[] Properties = typeof(T).GetProperties();
    
    /// <summary>
    /// Ключевые свойства
    /// </summary>
    public static readonly PropertyInfo[] KeyProperties = typeof(T).GetProperties()
        .Where(property => property.GetCustomAttribute<KeyAttribute>() != null)
        .ToArray();
    
    /// <summary>
    /// Неключевые свойства
    /// </summary>
    public static readonly PropertyInfo[] NotKeyProperties = typeof(T).GetProperties()
        .Where(property => property.GetCustomAttribute<KeyAttribute>() == null)
        .ToArray();

    /// <summary>
    /// Построить запрос на чтение
    /// </summary>
    public string GetSelectQuery()
    {
        return $"""
                select {string.Join(", ", Properties.Select(p => $"{GetColumnName(p)} as {p.Name}"))}
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
                where {string.Join(" and ", KeyProperties.Select(p => $"{GetColumnName(p)} = :{p.Name}"))}
                """;
    }
    
    /// <summary>
    /// Построить запрос на вставку
    /// </summary>
    public string GetInsertQuery()
    {
        return $"""
                insert into {SchemaName}.{TableName} ({string.Join(", ", Properties.Select(GetColumnName))})
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
                on conflict ({string.Join(", ", KeyProperties.Select(GetColumnName))})
                do update set {string.Join(", ", NotKeyProperties.Select(p => $"{GetColumnName(p)} = :{p.Name}"))}
                """;
    }
    
    /// <summary>
    /// Построить запрос на удаление
    /// </summary>
    public string GetDeleteByKeyQuery()
    {
        return $"""
                delete from {SchemaName}.{TableName}
                where {string.Join(" and ", KeyProperties.Select(p => $"{GetColumnName(p)} = :{p.Name}"))}
                """;
    }
    
    /// <summary>
    /// Построить запрос на обновление
    /// </summary>
    public string GetUpdateByKeyQuery()
    {
        return $"""
                update {SchemaName}.{TableName}
                set {string.Join(", ", NotKeyProperties.Select(p => $"{GetColumnName(p)} = :{p.Name}"))}
                where {string.Join(" and ", KeyProperties.Select(p => $"{GetColumnName(p)} = :{p.Name}"))}
                """;
    }

    /// <summary>
    /// Получить название столбца
    /// </summary>
    /// <param name="property">Свойство</param>
    /// <returns>Название столбца</returns>
    private static string GetColumnName(PropertyInfo property)
    {
        var columnAttribute = property.GetCustomAttribute<ColumnAttribute>();
        return columnAttribute != null && !string.IsNullOrEmpty(columnAttribute.Name)
            ? columnAttribute.Name
            : property.Name;
    }
}