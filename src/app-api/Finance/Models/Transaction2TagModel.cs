using System.ComponentModel.DataAnnotations.Schema;

namespace Finance.Models.Transaction2Tag;

[Table("transaction_2_tag", Schema = "finance")]
public class Transaction2TagModel
{
    [Column("transaction_id")]
    public int TransactionId { get; set; }
    
    [Column("tag_id")]
    public int TagId { get; set; }
}