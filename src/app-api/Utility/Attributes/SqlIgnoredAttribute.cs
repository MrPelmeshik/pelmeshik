namespace Utility.Attributes;

/// <summary>
/// Игнорировать в запросах
/// </summary>
[AttributeUsage(AttributeTargets.Property | AttributeTargets.Field)]
public class SqlIgnoredAttribute : Attribute
{
    
}