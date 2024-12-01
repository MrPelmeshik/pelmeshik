using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Utility.Models;

namespace Finance.Models.TransactionFrequency;

public class TransactionFrequencyKey : BaseKey
{
    [Key, ReadOnly(true), Column("id")]
    public int Id { get; set; }
}