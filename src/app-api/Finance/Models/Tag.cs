using System.ComponentModel.DataAnnotations.Schema;

namespace Finance.Models;

[Table("tag", Schema = "finance")]
public class Tag : SimpleKeyIntId
{
    [Column("name")]
    public string Name { get; set; }
    
    [Column("color")]
    public string Color { get; set; }
}