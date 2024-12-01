using System.ComponentModel.DataAnnotations.Schema;

namespace Finance.Models.Agent;

[Table("agent", Schema = "finance")]
public class AgentModel : AgentKey
{
    [Column("name")] 
    public string? Name { get; set; }

    [Column("is_person")] 
    public bool? IsPerson { get; set; }
}