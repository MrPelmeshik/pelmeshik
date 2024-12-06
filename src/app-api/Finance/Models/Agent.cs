using System.ComponentModel.DataAnnotations.Schema;

namespace Finance.Models;

[Table("agent", Schema = "finance")]
public class Agent : SimpleKeyIntId
{
    [Column("name")] 
    public string? Name { get; set; }

    [Column("is_person")] 
    public bool? IsPerson { get; set; }
}