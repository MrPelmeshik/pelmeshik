using Account.Models;
using Utility.Providers;

namespace Account.Services;

public class AuthService(BaseProvider<UserModel> userProvider)
{
    private readonly BaseProvider<UserModel> _userProvider = userProvider;

    public UserModel? LogIn(LogInParamsItem logInParamsItem)
    {
        throw new NotImplementedException();
    }

    public UserModel? Register(LogInParamsItem logInParamsItem)
    {
        throw new NotImplementedException();
    }

    public UserModel? UpdatePassword(LogInParamsItem logInParamsItem)
    {
        throw new NotImplementedException();
    }
}