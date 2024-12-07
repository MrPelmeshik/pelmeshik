using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Utility.Models;

namespace Finance.Models;

[Table("tag", Schema = "finance")]
public class Tag :  IItemKeyIntId, IItemUpdatedDate, IItemIsActiveSign
{
    [Key, ReadOnly(true), Column("id")]
    public int? Id { get; set; }
    
    [Column("update_date"), DefaultValue("now()")]
    public DateTime? UpdateDate { get; set; }
    
    [Column("is_active")]
    public bool? IsActive { get; set; }

    [Column("name")]
    public string? Name { get; set; }
    
    [Column("color")]
    public string? Color { get; set; }
}