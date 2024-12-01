namespace Utility.Models;

public class Query
{
    public string Sql { get; set; }
    public object? Parameters { get; set; }
    
    public Query(string sql, object? parameters = null)
    {
        Sql = sql;
        Parameters = parameters;
    }
}