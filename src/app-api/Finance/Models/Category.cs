using System.ComponentModel.DataAnnotations.Schema;
using Utility.Models;

namespace Finance.Models;

[Table("category", Schema = "finance")]
public class Category : BaseItemId
{
    [Column("name")]
    public string Name { get; set; }
    
    [Column("color")]
    public string Color { get; set; }
}