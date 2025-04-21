using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Utility.Interfaces;
using Utility.Models;

namespace Account.Models;

[Table("user", Schema = "account")]
public class UserModel : IItemKeyGuidId, IItemUpdateDate, IItemCreateDate, IItemIsActiveSign
{
    [Key, ReadOnly(true), Column("id")]
    public Guid? Id { get; set; }
    
    [Column("create_date")]
    public DateTime CreateDate { get; set; }
    
    [Column("update_date")]
    public DateTime? UpdateDate { get; set; }
    
    [Column("is_active")]
    public bool? IsActive { get; set; }
    
    [Column("name")] 
    public string? Name { get; set; }
    
    [Column("login")] 
    public string? Login { get; set; }
    
    [Column("password")] 
    public string? Password { get; set; }
    
    [Column("email")] 
    public string? Email { get; set; }
}