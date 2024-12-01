using System.ComponentModel.DataAnnotations.Schema;

namespace Finance.Models.Category;

[Table("category", Schema = "finance")]
public class CategoryModel : CategoryKey
{
    [Column("name")]
    public string Name { get; set; }
    
    [Column("color")]
    public string Color { get; set; }
}