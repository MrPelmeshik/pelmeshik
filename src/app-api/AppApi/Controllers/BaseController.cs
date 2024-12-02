using AppApi.Attributes;
using Finance.Models.Agent;
using Microsoft.AspNetCore.Mvc;
using Utility.Extensions;
using Utility.Interfaces;
using Utility.Services;

namespace AppApi.Controllers;

/// <summary>
/// Базовый провайдер
/// </summary>
public abstract class BaseController<TSource, TKey>(
    BaseService<TSource, TKey> service
    ) where TKey : IItemKey where TSource : TKey
{
    /// <summary>
    /// Получить элемент по идентификатору
    /// </summary>
    [HttpGet, AppApiEvent("Получение элемента по идентификатору")]
    public async Task<TSource?> GetItem([FromQuery] TKey key) => await service.GetItem(key);

    /// <summary>
    /// Получить элементы
    /// </summary>
    [HttpGet, AppApiEvent("Получение элементов")]
    public async Task<IEnumerable<TSource>> GetItems() => await service.GetItems();

    /// <summary>
    /// Добавить элемент
    /// </summary>
    [HttpPut, AppApiEvent("Добавление элемента")]
    public async Task<int> AddItem([FromBody] TSource item) => await service.AddItem(item);

    /// <summary>
    /// Добавить элементы
    /// </summary>
    [HttpPut, AppApiEvent("Добавление элементов")]
    public async Task<IEnumerable<int>> AddItems([FromBody] IEnumerable<TSource> items) => await service.AddItems(items);

    /// <summary>
    /// Обновить элемент
    /// </summary>
    [HttpPatch, AppApiEvent("Обновление элемента")]
    public async Task UpdateItem([FromBody] TSource item) => await service.UpdateItem(item);

    /// <summary>
    /// Обновить элементы
    /// </summary>
    [HttpPatch, AppApiEvent("Обновление элементов")]
    public async Task UpdateItems([FromBody] IEnumerable<TSource> items) => await service.UpdateItems(items);

    /// <summary>
    /// Удалить элемент
    /// </summary>
    [HttpDelete, AppApiEvent("Удаление элемента")]
    public async Task DeleteItem([FromBody] TKey key) => await service.DeleteItem(key);

    /// <summary>
    /// Удалить элементы
    /// </summary>
    [HttpDelete, AppApiEvent("Удаление элементов")]
    public async Task DeleteItems([FromBody] IEnumerable<TKey> keys) => await service.DeleteItems(keys);
}