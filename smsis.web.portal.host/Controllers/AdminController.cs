using smsis.web.portal.host.Infrastructure.Interfaces;
using smsis.web.portal.host.Infrastructure.Models;
using smsis.web.portal.host.Infrastructure;
using smsis.web.portal.host.Models;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.Text.Json;

namespace smsis.web.portal.host.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IUserManager _userManager;

        public AdminController(IUserManager userManager)
        {
            _userManager = userManager;
        }

        // GET: api/<AdminController>
        [HttpGet]
        public string Get()
        {
            var users = _userManager.GetAll();

            //Dictionary<User, IList<Claim>> box = new Dictionary<User, IList<Claim>>();

            List<UserBox> box = new List<UserBox>();

            foreach (var item in users)
            {
                box.Add(new UserBox { User = item, Claims = _userManager.GetClaims(item) });
            }
            var str = JsonSerializer.Serialize(box);
            return str;
        }

        // GET api/<AdminController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<AdminController>
        [HttpPost]
        public void Post([FromBody] HttpAdminBody value)
        {
            var user = new User
            {
                Name = value.Login,
                Role = value.Role,
            };

            var isUser = _userManager.Create(user, value.Password);

            if (isUser.Successfully)
            {
                _userManager.AddClaim(user, new Claim(ClaimTypes.Role, value.Role));

                var permission = new Permission
                {
                    Read = value.Read,
                    Write = value.Write,
                    Edit = value.Edit,
                    Delete = value.Delete,
                };

                _userManager.AddClaim(user, new Claim("Permission", Encodes.ToBase64(JsonSerializer.Serialize(permission))));

                //_userManager.AddClaim(_user, new Claim(ClaimTypes.Name, value.Name));
            }
        }

        // PUT api/<AdminController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<AdminController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }

    public class UserBox
    {
        public User User { get; set; }
        public IList<Claim> Claims { get; set; }
    }
}
