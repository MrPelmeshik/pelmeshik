using AppApi.Attributes;
using Microsoft.AspNetCore.Mvc;
using Utility.Providers;

namespace AppApi.Controllers;

/// <summary>
/// Базовый провайдер
/// </summary>
public abstract class BaseController<T>(
    BaseProvider<T> provider
    )
{
    /// <summary>
    /// Получить элемент по идентификатору
    /// </summary>
    [HttpGet, AppApiEvent($"Получение элемента по идентификатору")]
    public async Task<T> GetItem(int id) => await provider.GetItem(id);

    /// <summary>
    /// Получить элементы
    /// </summary>
    [HttpGet, AppApiEvent("Получение элементов")]
    public async Task<IEnumerable<T>> GetItems() => await provider.GetItems();

    /// <summary>
    /// Добавить элемент
    /// </summary>
    [HttpPut, AppApiEvent("Добавление элемента")]
    public async Task<int> AddItem([FromBody] T item) => await provider.AddItem(item);

    /// <summary>
    /// Добавить элементы
    /// </summary>
    [HttpPut, AppApiEvent("Добавление элементов")]
    public async Task<IEnumerable<int>> AddItems([FromBody] IEnumerable<T> items) => await provider.AddItems(items);

    /// <summary>
    /// Обновить элемент
    /// </summary>
    [HttpPatch, AppApiEvent("Обновление элемента")]
    public async Task UpdateItem([FromBody] T item) => await provider.UpdateItem(item);

    /// <summary>
    /// Обновить элементы
    /// </summary>
    [HttpPatch, AppApiEvent("Обновление элементов")]
    public async Task UpdateItems([FromBody] IEnumerable<T> items) => await provider.UpdateItems(items);

    /// <summary>
    /// Удалить элемент
    /// </summary>
    [HttpDelete, AppApiEvent("Удаление элемента")]
    public async Task DeleteItem(int id) => await provider.DeleteItem(id);

    /// <summary>
    /// Удалить элементы
    /// </summary>
    [HttpDelete, AppApiEvent("Удаление элементов")]
    public async Task DeleteItems(IEnumerable<int> ids) => await provider.DeleteItems(ids);
}