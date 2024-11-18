using Finance.Models;
using Microsoft.AspNetCore.Mvc;
using Utility;
using Utility.Providers;

namespace AppApi.Controllers.Finance;

[ApiController]
[Area("Finance")]
[Route("[area]/[controller]/[action]")]
public class CategoryController(
    BaseProvider<Category> provider
    ) : BaseController<Category>(provider);