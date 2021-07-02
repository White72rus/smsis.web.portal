using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace smsis.web.portal.DAL.Entityes
{
    public class LogEntity
    {
        [Column("ID")]
        public Guid Id { get; set; }

        [Column("ID_SUBJECT", TypeName = "nvarchar(128)")]
        public string IdSubject { get; set; }

        [Column("SUBJECT_NAME", TypeName = "nvarchar(128)")]
        public string SubjectName { get; set; }

        [Column("TYPE_LOG", TypeName = "nvarchar(256)")]
        public string TypeLog { get; set; }

        [Column("BEGIN_DATE", TypeName = "datetime(6)")]
        public DateTime BeginDate { get; set; }

        [Column("END_DATE", TypeName = "datetime(6)")]
        public DateTime EndDate { get; set; }
    }
}
