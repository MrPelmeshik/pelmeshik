using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Utility.Interfaces;

namespace Utility.Models;

public class BaseItemId: IItemId
{
    [Key, ReadOnly(true), Column("id")]
    public int Id { get; set; }
}