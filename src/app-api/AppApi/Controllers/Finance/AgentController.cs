using Finance.Models;
using Microsoft.AspNetCore.Mvc;
using Utility.Providers;
using Utility.Services;

namespace AppApi.Controllers.Finance;

[
    ApiController, 
    Area("Finance"),
    Route("[area]/[controller]/[action]")
]
public class AgentController(
    BaseService<Agent> service
    ) : BaseController<Agent>(service);