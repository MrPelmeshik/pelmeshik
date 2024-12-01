using Finance.Models;
using Finance.Models.TransactionFrequency;
using Microsoft.AspNetCore.Mvc;
using Utility;
using Utility.Providers;
using Utility.Services;

namespace AppApi.Controllers.Finance;

[ApiController]
[Area("Finance")]
[Route("[area]/[controller]/[action]")]
public class TransactionFrequencyController(
    BaseService<TransactionFrequencyModel, TransactionFrequencyKey> service
    ) : BaseController<TransactionFrequencyModel, TransactionFrequencyKey>(service);