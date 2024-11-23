using Finance.Models;
using Microsoft.AspNetCore.Mvc;
using Utility.Providers;

namespace AppApi.Controllers.Finance;

[
    ApiController, 
    Area("Finance"),
    Route("[area]/[controller]/[action]")
]
public class AgentController(
    BaseProvider<Agent> provider
    ) : BaseController<Agent>(provider);