namespace Utility.Interfaces;

public interface IItemKeyGuidId: IItemKey
{
    public Guid? Id { get; set; }
}