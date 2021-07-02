using Microsoft.AspNetCore.Mvc;

namespace smsis.web.portal.host.Models
{
    public class HttpResponsAuth
    {
        public string State { get; set; }
        public string Token { get; set; }
        public StatusCodeResult StatusCode { get; set; }
    }
}
