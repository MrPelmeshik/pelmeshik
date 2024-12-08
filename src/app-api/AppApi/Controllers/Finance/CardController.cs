using Finance.Models;
using Microsoft.AspNetCore.Mvc;
using Utility.Interfaces;
using Utility.Models;
using Utility.Providers;
using Utility.Services;

namespace AppApi.Controllers.Finance;

[ApiController]
[Area("Finance")]
[Route("[area]/[controller]/[action]")]
public class CardController(
    IService<CardModel> service
    ) : BaseController<CardModel>(service);