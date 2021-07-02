using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;

namespace smsis.web.portal.host.Infrastructure.auth
{
    internal class JwtIdentity
    {
        internal string CreateToken(AuthOptions options)
        {
            if (options != null)
            {
                var dateTime = DateTime.UtcNow;

                var jwt = new JwtSecurityToken(
                        issuer: options.Issoer,
                        audience: options.Audience,
                        notBefore: dateTime,
                        expires: dateTime.Add(TimeSpan.FromMinutes(options.LifeTime)),
                        signingCredentials: new SigningCredentials(options.Key, SecurityAlgorithms.HmacSha256),
                        claims: options.Claims
                        );

                var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
                return encodedJwt;
            }
            return null;
        }
    }
}
