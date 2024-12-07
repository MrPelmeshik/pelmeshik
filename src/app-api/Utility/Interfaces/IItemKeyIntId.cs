using Utility.Interfaces;

namespace Utility.Models;

public interface IItemKeyIntId: IItemKey
{
    public int? Id { get; set; }
}