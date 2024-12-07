using Finance.Models;
using Microsoft.AspNetCore.Mvc;
using Utility.Models;
using Utility.Providers;
using Utility.Services;

namespace AppApi.Controllers.Finance;

[ApiController]
[Area("Finance")]
[Route("[area]/[controller]/[action]")]
public class TagController(
    BaseService<Tag> service
    ) : BaseController<Tag>(service);