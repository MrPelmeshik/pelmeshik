using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Utility.Interfaces;
using Utility.Models;

namespace Finance.Models;

[Table("transaction_2_tag", Schema = "finance")]
public class Transaction2Tag
{
    [Column("transaction_id")]
    public int TransactionId { get; set; }
    
    [Column("tag_id")]
    public int TagId { get; set; }
}