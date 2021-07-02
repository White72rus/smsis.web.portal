using smsis.web.portal.host.Infrastructure.Interfaces;
using smsis.web.portal.host.Infrastructure.Models;
using System.Security.Claims;
using System.Text.Json;

namespace smsis.web.portal.host.Infrastructure
{
    public class BaseInitializeApp
    {
        private readonly IUserManager _userManager;

        public BaseInitializeApp(IUserManager userManager)
        {
            _userManager = userManager;
        }
        public void Init()
        {
            var user = new User
            {
                Name = "Admin",
            };

            var isUser = _userManager.Create(user, "admin");
            if (isUser.Successfully)
            {
                _userManager.AddClaim(user, new Claim(ClaimTypes.Role, "Administrator"));

                var permission = new Permission
                {
                    Read = true,
                    Write = true,
                    Edit = true,
                    Delete = true,
                };
                _userManager.AddClaim(user, new Claim("Permission", Encodes.ToBase64(JsonSerializer.Serialize(permission))));
            }

            var _user = _userManager.FindByName("Admin");
            if (_user != null)
            {
                _userManager.AddClaim(_user, new Claim(ClaimTypes.Name, _user.Name));
            }
        }
    }
}
