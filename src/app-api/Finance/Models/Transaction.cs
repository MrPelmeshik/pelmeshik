using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;
using Utility;
using Utility.Interfaces;
using Utility.Models;

namespace Finance.Models;

[Table("transaction", Schema = "finance")]
public class Transaction : IItemId
{
    [Key]
    [Column("id")]
    public int Id { get; set; }
    
    [Column("short_description")]
    public string ShortDescription { get; set; }
    
    [Column("description")]
    public string Description { get; set; }
    
    [Column("value")]
    public double Value { get; set; }
    
    [Column("date")]
    public DateTime Date { get; set; }
    
    [Column("transaction_frequency_id")]
    public int TransactionFrequencyId { get; set; }
    
    [Column("card_id")]
    public int CardId { get; set; }
    
    [Column("agent_id")]
    public int AgentId { get; set; }
    
    [Column("category_id")]
    public int CategoryId { get; set; }
}