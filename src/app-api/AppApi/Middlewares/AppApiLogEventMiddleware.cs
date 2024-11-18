using AppApi.Attributes;

namespace AppApi.Middlewares;

public class AppApiLogEventMiddleware(ILogger<AppApiLogEventMiddleware> logger, RequestDelegate next)
{
    public async Task Invoke(HttpContext context)
    {
        var endpoint = context.GetEndpoint();
        
        var logItem = new LogEventItem(
            context.User.Identity?.Name, 
            endpoint?.DisplayName, 
            endpoint?.Metadata?.GetMetadata<AppApiEventAttribute>()?.EventDescription);
        
        try
        {
            await next(context);

            logger.LogInformation(logItem.ToString());
        }
        catch (Exception e)
        {
            logItem.SetResult(e.Message, e.StackTrace);
            logger.LogError(logItem.ToString());
        }
    }
}