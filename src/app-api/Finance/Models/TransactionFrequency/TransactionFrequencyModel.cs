using System.ComponentModel.DataAnnotations.Schema;

namespace Finance.Models.TransactionFrequency;

[Table("transaction_frequency", Schema = "finance")]
public class TransactionFrequencyModel: TransactionFrequencyKey
{
    [Column("name")]
    public string Name { get; set; }
    
    [Column("full_name")]
    public string FullName { get; set; }
}