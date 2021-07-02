using Microsoft.IdentityModel.Tokens;
using System.Collections.Generic;
using System.Security.Claims;

namespace smsis.web.portal.host.Infrastructure.auth
{
    internal class AuthOptions
    {
        /// <summary>
        /// Issoer.
        /// </summary>
        internal string Issoer { get; set; }
        /// <summary>
        /// Audience.
        /// </summary>
        internal string Audience { get; set; }
        /// <summary>
        /// Life time token in minutes.
        /// </summary>
        internal int LifeTime { get; set; } = 5;
        /// <summary>
        /// Security key.
        /// </summary>
        internal SymmetricSecurityKey Key { get; set; }
        /// <summary>
        /// Claims.
        /// </summary>
        internal IEnumerable<Claim> Claims { get; set; } = null;
    }
}
