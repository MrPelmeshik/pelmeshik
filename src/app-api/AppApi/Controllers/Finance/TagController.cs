using Finance.Models;
using Finance.Models.Tag;
using Microsoft.AspNetCore.Mvc;
using Utility.Providers;
using Utility.Services;

namespace AppApi.Controllers.Finance;

[ApiController]
[Area("Finance")]
[Route("[area]/[controller]/[action]")]
public class TagController(
    BaseService<TagModel, TagKey> service
    ) : BaseController<TagModel, TagKey>(service);