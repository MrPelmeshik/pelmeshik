using AppApi;
using AppApi.Middlewares;
using NLog; 
using NLog.Web; 
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using NLog.Extensions.Logging;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("ReactPolicy",
        builder =>
        {
            builder.WithOrigins("*")
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

AppApiModule.Init(builder.Services);

// var logger = NLog.LogManager
//     .Setup()
//     .LoadConfigurationFromAppSettings()
//     .GetCurrentClassLogger();
// builder.Logging.ClearProviders().AddNLog();
// builder.Logging.ClearProviders();
// builder.Host.UseNLog(); 

var app = builder.Build();

app.UseCors("ReactPolicy");
// app.UseExceptionHandler();
app.UseHttpsRedirection();
app.UseRouting();
// app.UseAuthorization();
app.UseSwagger();
app.UseSwaggerUI();

app.UseMiddleware<AppApiLogEventMiddleware>();
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.Run();
