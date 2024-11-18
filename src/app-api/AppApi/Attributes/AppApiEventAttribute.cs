namespace AppApi.Attributes;

/// <summary>
/// Событие приложения
/// </summary>
[AttributeUsage(AttributeTargets.Method)]
public class AppApiEventAttribute(string eventDescription) : Attribute
{
    public readonly string EventDescription = eventDescription;
}