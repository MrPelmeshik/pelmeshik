using System.ComponentModel.DataAnnotations.Schema;
using System.Reflection;

namespace Utility.Extensions;

public static class TypeExtensions
{
    /// <summary>
    /// Название таблицы БД
    /// </summary>
    public static string GetTableName(this Type type) => 
        type.GetCustomAttribute<TableAttribute>()?.Name ?? throw new Exception("Не указано имя таблицы");
    
    /// <summary>
    /// Название схемы БД
    /// </summary>
    public static string GetSchemaName(this Type type) => 
        type.GetCustomAttribute<TableAttribute>()?.Schema ?? throw new Exception("Не указана схема таблицы");
    
    public static string GetFullTableName(this Type type) => 
        $"{type.GetSchemaName()}.{type.GetTableName()}";
}