using smsis.web.portal.DAL.Entityes;
using smsis.web.portal.DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace smsis.web.portal.DAL.Implementation
{
    public class ClaimsRepository : IClaimsRepository
    {
        public bool Add(ClaimEntity claim)
        {
            if (IsClaimExixst(claim.UserId.ToString(), claim.ClaimType))
                return false;

            using (var context = new DataBaseContext())
            {
                context.Claims.Add(claim);
                context.SaveChanges();
            }
            return IsClaimExixst(claim.UserId.ToString(), claim.ClaimType);
        }

        public IList<ClaimEntity> Get(UserEntity user)
        {
            IList<ClaimEntity> result;
            using (var context = new DataBaseContext())
            {
                result = context.Claims.Where(c => c.UserId == user.Id).ToList();
            }
            return result;
        }

        private bool IsClaimExixst(string userId, string claimType)
        {
            IList<ClaimEntity> result;
            using (var context = new DataBaseContext())
                result = context.Claims.Where(c => c.UserId.ToString() == userId && c.ClaimType == claimType).ToList();

            if (result.Count > 0)
                return true;
            return false;
        }
    }
}
