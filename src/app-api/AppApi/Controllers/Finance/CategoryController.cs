using Finance.Models;
using Finance.Models.Category;
using Microsoft.AspNetCore.Mvc;
using Utility.Providers;
using Utility.Services;

namespace AppApi.Controllers.Finance;

[ApiController]
[Area("Finance")]
[Route("[area]/[controller]/[action]")]
public class CategoryController(
    BaseService<CategoryModel,CategoryKey> service
    ) : BaseController<CategoryModel, CategoryKey>(service);