using System.ComponentModel.DataAnnotations.Schema;
using Utility.Models;

namespace Finance.Models;

[Table("tag", Schema = "finance")]
public class Tag : BaseItemId
{
    [Column("name")]
    public string Name { get; set; }
    
    [Column("color")]
    public string Color { get; set; }
}