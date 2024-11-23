using System.ComponentModel.DataAnnotations.Schema;
using Utility.Models;

namespace Finance.Models;

[Table("agent", Schema = "finance")]
public class Agent :  BaseItemId
{
    [Column("name")]
    public string Name { get; set; }
    
    [Column("is_person")]
    public bool IsPerson { get; set; }
}