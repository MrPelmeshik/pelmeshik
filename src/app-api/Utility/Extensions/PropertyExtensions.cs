using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data;
using System.Reflection;
using System.Reflection.Metadata;
using System.Runtime.CompilerServices;
using Npgsql;

namespace Utility.Extensions;

public static class PropertyExtensions
{
    public static IList<PropertyInfo> GetKeyProperties(this IList<PropertyInfo> properties) => properties
        .Where(property => property.GetCustomAttribute<KeyAttribute>() != null)
        .ToArray();

    public static IList<PropertyInfo> GetNonKeyProperties(this IList<PropertyInfo> properties) => properties
        .Where(property => property.GetCustomAttribute<KeyAttribute>() == null)
        .ToArray();
    
    public static IList<PropertyInfo> GetReadOnlyProperties(this IList<PropertyInfo> properties) => properties
        .Where(property =>
        {
            var readOnlyAttribute = property.GetCustomAttribute<ReadOnlyAttribute>();
            return readOnlyAttribute is { IsReadOnly: true };
        })
        .ToArray();

    public static IList<PropertyInfo> GetNonReadOnlyProperties(this IList<PropertyInfo> properties) => properties
        .Where(property =>
        {
            var readOnlyAttribute = property.GetCustomAttribute<ReadOnlyAttribute>();
            return readOnlyAttribute is not { IsReadOnly: true };
        })
        .ToArray();
    
    public static IList<string> GetColumnNames(this IList<PropertyInfo> properties) => properties
        .Select(GetColumnName)
        .ToList();
    
    public static IList<PropertyInfo> GetPropertiesWithoutFields(this IList<PropertyInfo> properties, Type type) => properties
        .Where(property => !type.IsAssignableFrom(property.PropertyType))
        .ToList();
    
    public static object? GetDefaultValue(this PropertyInfo property) => property
        .GetCustomAttribute<DefaultValueAttribute>()?
        .Value;

    public static string GetColumnName(this PropertyInfo property)
    {
        var columnAttribute = property.GetCustomAttribute<ColumnAttribute>();
        return columnAttribute != null && !string.IsNullOrEmpty(columnAttribute.Name)
            ? columnAttribute.Name
            : property.Name;
    }
}