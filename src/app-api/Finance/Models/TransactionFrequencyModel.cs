using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Utility.Models;

namespace Finance.Models;

[Table("transaction_frequency", Schema = "finance")]
public class TransactionFrequencyModel :  IItemKeyIntId, IItemUpdateDate, IItemIsActiveSign
{
    [Key, ReadOnly(true), Column("id")]
    public int? Id { get; set; }
    
    [Column("update_date")]
    public DateTime? UpdateDate { get; set; }
    
    [Column("is_active")]
    public bool? IsActive { get; set; }

    [Column("name")]
    public string? Name { get; set; }
    
    [Column("full_name")]
    public string? FullName { get; set; }
}