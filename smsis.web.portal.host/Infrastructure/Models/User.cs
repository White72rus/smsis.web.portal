using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace smsis.web.portal.host.Infrastructure.Models
{
    public class User
    {
        public string Name { get; set; }
        public string Role { get; set; }
        public string Login { get; set; }
        public string Email { get; set; }
    }
}
