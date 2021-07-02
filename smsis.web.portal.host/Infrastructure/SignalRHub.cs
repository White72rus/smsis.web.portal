using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace smsis.web.portal.host.Infrastructure
{
    public class SignalRHub : Hub
    {
        public Task SendMessageUser(string user, string message)
        {
            return Clients.All.SendAsync("onMessageU", user, message);
        }
        public Task SendMessage(string message)
        {
            return Clients.All.SendAsync("onMessage", message);
        }
    }
}
