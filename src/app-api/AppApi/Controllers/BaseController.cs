using AppApi.Attributes;
using Microsoft.AspNetCore.Mvc;
using Utility.Extensions;
using Utility.Interfaces;
using Utility.Services;

namespace AppApi.Controllers;

/// <summary>
/// Базовый провайдер
/// </summary>
public abstract class BaseController<TSource>(
    BaseService<TSource> service
    ) where TSource : IItemKey
{
    /// <summary>
    /// Получить элемент по идентификатору
    /// </summary>
    [HttpGet, AppApiEvent("Получение элемента по идентификатору")]
    public async Task<TSource?> GetItem([FromQuery] TSource key) => await service.GetItem(key);

    /// <summary>
    /// Получить элементы
    /// </summary>
    [HttpGet, AppApiEvent("Получение элементов")]
    public async Task<IEnumerable<TSource>> GetItems() => await service.GetItems();

    /// <summary>
    /// Добавить элемент
    /// </summary>
    [HttpPost, AppApiEvent("Добавление элемента")]
    public async Task<int> AddItem([FromBody] TSource item) => await service.AddItem(item);

    /// <summary>
    /// Обновить элемент
    /// </summary>
    [HttpPost, AppApiEvent("Обновление элемента")]
    public async Task UpdateItem([FromBody] TSource item) => await service.UpdateItem(item);

    /// <summary>
    /// Удалить элемент
    /// </summary>
    [HttpPost, AppApiEvent("Удаление элемента")]
    public async Task DeleteItem([FromBody] TSource key) => await service.DeleteItem(key);
    
    /// <summary>
    /// Добавить или обновить элемент
    /// </summary>
    [HttpPost, AppApiEvent("Добавление или обновление элемента")]
    public async Task<int> AddOrUpdateItem([FromBody] TSource item) => await service.AddOrUpdateItem(item);
}