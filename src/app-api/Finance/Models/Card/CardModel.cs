using System.ComponentModel.DataAnnotations.Schema;

namespace Finance.Models.Card;

[Table("card", Schema = "finance")]
public class CardModel : CardKey
{
    [Column("short_name")]
    public string ShortName { get; set; }

    [Column("name")]
    public string Name { get; set; }
    
    [Column("full_name")]
    public string FullName { get; set; }
}