using System.ComponentModel.DataAnnotations.Schema;

namespace Finance.Models;

[Table("transaction_frequency", Schema = "finance")]
public class TransactionFrequency: SimpleKeyIntId
{
    [Column("name")]
    public string Name { get; set; }
    
    [Column("full_name")]
    public string FullName { get; set; }
}