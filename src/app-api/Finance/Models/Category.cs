using System.ComponentModel.DataAnnotations.Schema;

namespace Finance.Models;

[Table("category", Schema = "finance")]
public class Category : SimpleKeyIntId
{
    [Column("name")]
    public string Name { get; set; }
    
    [Column("color")]
    public string Color { get; set; }
}