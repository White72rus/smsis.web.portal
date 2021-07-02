using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace smsis.web.portal.DAL.Entityes
{
    public class ClaimEntity
    {
        [Column("ID")]
        public int Id { get; set; }

        [Column("USER_ID")]
        public Guid UserId { get; set; }

        [Column("CLAIM_TYPE", TypeName = "nvarchar(128)")]
        public string ClaimType { get; set; }

        [Column("CLAIM_VALUE", TypeName = "nvarchar(128)")]
        public string ClaimValue { get; set; }
    }
}
