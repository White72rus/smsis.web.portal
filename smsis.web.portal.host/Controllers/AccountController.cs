using smsis.web.portal.host.Infrastructure.Interfaces;
using smsis.web.portal.host.Infrastructure.auth;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;
using smsis.web.portal.host.Models;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using System.Text;

namespace smsis.web.portal.host.Controllers
{
    public class AccountController : Controller
    {
        private readonly string _key = "RLMSZZWQWVNWBSIMKBRHYJBKPQPWMGBCBWAAKOMNXFYPEQNEVKLLXWGHKCDIJADP";
        private readonly IUserManager _userManager;

        public AccountController(IUserManager userManager)
        {
            _userManager = userManager;
        }

        [Authorize]
        public IActionResult Index()
        {
            return Ok();
        }

        [HttpPost]
        public IActionResult Login([FromBody] HttpLoginBody payLoad)
        {
            if (string.IsNullOrWhiteSpace(payLoad.Name) || string.IsNullOrWhiteSpace(payLoad.Password))
                return BadRequest("Error: Null or empry login/password.");

            var user = _userManager.FindByName(payLoad.Name);
            if (user == null)
                return Unauthorized("User not found.");

            var authResult = _userManager.PasswordSignIn(user, payLoad.Password);

            if (!authResult.Successfully)
                return Unauthorized("Pass is bad.");

            var claims = _userManager.GetClaims(user);

            var jwt = new JwtIdentity().CreateToken(new AuthOptions {
                Issoer = "http://localhost:5010",
                Audience = "http://localhost:5010",
                Key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_key)),
                LifeTime = 5,
                Claims = claims,
            });

            var obj = new HttpResponsAuth
            {
                StatusCode = StatusCode(200),
                State = "Ok",
                Token = jwt,
            };

            var token = JsonSerializer.Serialize(obj);

            return Ok(token);
        }

        [HttpPost]
        [Authorize]
        public IActionResult Logout()
        {
            return View();
        }
    }
}
