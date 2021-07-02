using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace smsis.web.portal.DAL.Entityes
{
    [Table("mss")]
    public class MssEntity
    {
        [Key]
        [Column("ID")]
        public int Id { get; set; }

        [Column("EDGE", TypeName = "nvarchar(256)")]
        public string EDGE { get; set; }

        [Column("LINK_MGCF", TypeName = "nvarchar(256)")]
        public string LinkMgcf { get; set; }

        [Column("PORT_NUMBER_E1", TypeName = "nvarchar(256)")]
        public string PortNumberE1 { get; set; }

        [Column("SIGNAL_TYPE", TypeName = "nvarchar(256)")]
        public string SignalType { get; set; }

        [Column("DPC", TypeName = "nvarchar(256)")]
        public string DPC { get; set; }

        [Column("TS", TypeName = "nvarchar(256)")]
        public string TS { get; set; }

        [Column("SL", TypeName = "nvarchar(256)")]
        public string SL { get; set; }

        [Column("MCTET_GCTET", TypeName = "nvarchar(256)")]
        public string MctetGctet { get; set; }

        [Column("DISTRICT", TypeName = "nvarchar(256)")]
        public string District { get; set; }

        [Column("CITY", TypeName = "nvarchar(256)")]
        public string City { get; set; }

        [Column("OBJ_MSS", TypeName = "nvarchar(256)")]
        public string ObjMss { get; set; }

        [Column("TRUNK_GROUP", TypeName = "nvarchar(256)")]
        public string TrunkGroup { get; set; }

        [Column("TRANSPORT_SDH", TypeName = "nvarchar(256)")]
        public string TransportSDH { get; set; }

        [Column("PREFIX", TypeName = "nvarchar(256)")]
        public string Prefix { get; set; }

        [Column("CONTACT_SIDE_B", TypeName = "nvarchar(256)")]
        public string ContactSideB { get; set; }

        [Column("STATE", TypeName = "nvarchar(256)")]
        public string State { get; set; }

        [Column("COMMISSIONING_DATE", TypeName = "nvarchar(512)")]
        public string CommissioningDate { get; set; }

        [Column("BASE_DOC", TypeName = "nvarchar(256)")]
        public string BaseDoc { get; set; }

        [Column("COMMENT", TypeName = "nvarchar(512)")]
        public string Comment { get; set; }
    }
}
