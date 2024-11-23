using System.ComponentModel.DataAnnotations.Schema;
using Utility.Models;

namespace Finance.Models;

[Table("transaction_frequency", Schema = "finance")]
public class TransactionFrequency: BaseItemId
{
    [Column("name")]
    public string Name { get; set; }
    
    [Column("full_name")]
    public string FullName { get; set; }
}