using smsis.web.portal.DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace smsis.web.portal.host.Infrastructure
{
    public class QMessage
    {
        public string Table { get; set; }
        public string Query { get; set; }
        public string Data { get; set; }
    }
}
