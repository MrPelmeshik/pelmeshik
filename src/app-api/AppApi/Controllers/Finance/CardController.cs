using Finance.Models;
using Finance.Models.Card;
using Microsoft.AspNetCore.Mvc;
using Utility.Providers;
using Utility.Services;

namespace AppApi.Controllers.Finance;

[ApiController]
[Area("Finance")]
[Route("[area]/[controller]/[action]")]
public class CardController(
    BaseService<CardModel, CardKey> service
    ) : BaseController<CardModel, CardKey>(service);