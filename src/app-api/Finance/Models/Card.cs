using System.ComponentModel.DataAnnotations.Schema;
using Utility.Models;

namespace Finance.Models;

[Table("card", Schema = "finance")]
public class Card : BaseItemId
{
    [Column("short_name")]
    public string ShortName { get; set; }

    [Column("name")]
    public string Name { get; set; }
    
    [Column("full_name")]
    public string FullName { get; set; }
}