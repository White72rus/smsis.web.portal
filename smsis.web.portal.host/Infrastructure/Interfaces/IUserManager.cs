using smsis.web.portal.host.Infrastructure.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace smsis.web.portal.host.Infrastructure.Interfaces
{
    public interface IUserManager
    {
        UserResult Create(User user, string password);
        UserResult Delete(string userName);
        User FindByName(string userName);
        SignInResult PasswordSignIn(User user, string password);
        UserResult AddClaim(User user, Claim claim);
        IList<Claim> GetClaims(User user);
        IList<User> GetAll();
    }
}
