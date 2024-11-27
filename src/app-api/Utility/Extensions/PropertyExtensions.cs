using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Reflection;

namespace Utility.Extensions;

public static class PropertyExtensions
{
    public static IList<PropertyInfo> GetKeyProperties(this IList<PropertyInfo> properties) => properties
        .Where(property => property.GetCustomAttribute<KeyAttribute>() != null)
        .ToArray();

    public static IList<PropertyInfo> GetNonKeyProperties(this IList<PropertyInfo> properties) => properties
        .Where(property => property.GetCustomAttribute<KeyAttribute>() == null)
        .ToArray();
    
    public static IList<string> GetColumnNames(this IList<PropertyInfo> properties) => properties
        .Select(GetColumnName)
        .ToList();
    
    public static string GetColumnName(this PropertyInfo property)
    {
        var columnAttribute = property.GetCustomAttribute<ColumnAttribute>();
        return columnAttribute != null && !string.IsNullOrEmpty(columnAttribute.Name)
            ? columnAttribute.Name
            : property.Name;
    }
}