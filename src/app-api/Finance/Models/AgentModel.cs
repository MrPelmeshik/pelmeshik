using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Utility.Models;

namespace Finance.Models;

[Table("agent", Schema = "finance")]
public class AgentModel : IItemKeyIntId, IItemUpdateDate, IItemIsActiveSign
{
    [Key, ReadOnly(true), Column("id")]
    public int? Id { get; set; }
    
    [Column("update_date")]
    public DateTime? UpdateDate { get; set; }
    
    [Column("is_active")]
    public bool? IsActive { get; set; }
    
    [Column("name")] 
    public string? Name { get; set; }

    [Column("is_person")] 
    public bool? IsPerson { get; set; }
}