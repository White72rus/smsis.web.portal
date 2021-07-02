using smsis.web.portal.DAL.Entityes;
using System.Collections.Generic;

namespace smsis.web.portal.DAL.Interfaces
{
    public interface IClaimsRepository
    {
        bool Add(ClaimEntity claim);
        IList<ClaimEntity> Get(UserEntity user);
    }
}
