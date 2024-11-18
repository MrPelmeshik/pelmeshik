using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Utility.Interfaces;
using Utility.Models;

namespace Finance.Models;

[Table("card", Schema = "finance")]
public class Card : IItemId
{
    [Key]
    [Column("id")]
    public int Id { get; set; }
    
    [Column("short_name")]
    public string ShortName { get; set; }

    [Column("name")]
    public string Name { get; set; }
    
    [Column("full_name")]
    public string FullName { get; set; }
}