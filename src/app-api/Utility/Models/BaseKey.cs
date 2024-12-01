using System.ComponentModel.DataAnnotations;
using Utility.Interfaces;

namespace Utility.Models;

public abstract class BaseKey : IItemKey
{
    protected BaseKey()
    {
        if (!typeof(BaseKey).GetProperties().All(p => Attribute.IsDefined(p, typeof(KeyAttribute))))
        {
            throw new AggregateException($"Для модели {nameof(BaseKey)} не все свойства являются ключевыми");
        }
    }
}