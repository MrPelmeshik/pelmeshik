using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Utility;
using Utility.Interfaces;
using Utility.Models;

namespace Finance.Models;

[Table("agent", Schema = "finance")]
public class Agent :  IItemId
{
    [Key]
    [Column("id")]
    public int Id { get; set; }
    
    [Column("name")]
    public string Name { get; set; }
    
    [Column("is_person")]
    public bool IsPerson { get; set; }
}