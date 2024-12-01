using System.ComponentModel.DataAnnotations.Schema;

namespace Finance.Models.Tag;

[Table("tag", Schema = "finance")]
public class TagModel : TagKey
{
    [Column("name")]
    public string Name { get; set; }
    
    [Column("color")]
    public string Color { get; set; }
}