using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace smsis.web.portal.DAL.Entityes
{
    [Table("ims")]
    public class ImsEntity
    {
        [Key]
        [Column("ID")]
        public int Id { get; set; }

        [Column("LINK_AGCF", TypeName = "nvarchar(256)")]
        public string LinkAgcf { get; set; }

        [Column("LINK_PCSCF", TypeName = "nvarchar(256)")]
        public string LinkPcscf { get; set; }

        [Column("SIGN_VIMS", TypeName = "nvarchar(256)")]
        public string SignVims { get; set; }

        [Column("GROUP_SD", TypeName = "nvarchar(256)")]
        public string GroupSd { get; set; }

        [Column("FILIAL", TypeName = "nvarchar(256)")]
        public string Filial { get; set; }

        [Column("REGION", TypeName = "nvarchar(256)")]
        public string Region { get; set; }

        [Column("DISTRICT", TypeName = "nvarchar(256)")]
        public string District { get; set; }

        [Column("CITY", TypeName = "nvarchar(256)")]
        public string City { get; set; }

        [Column("ADDRES", TypeName = "nvarchar(256)")]
        public string Addres { get; set; }

        [Column("NUMBERS_RANGE", TypeName = "nvarchar(2000)")]
        public string NumbersRange { get; set; }

        [Column("USS", TypeName = "nvarchar(256)")]
        public string Uss { get; set; }

        [Column("CAPACITY", TypeName = "nvarchar(256)")]
        public string Capacity { get; set; }

        [Column("USE_CAPACITY", TypeName = "nvarchar(256)")]
        public string UseCapacity { get; set; }

        [Column("TECH_PROTOCOL", TypeName = "nvarchar(256)")]
        public string TechProtocol { get; set; }

        [Column("CPE_TYPE", TypeName = "nvarchar(256)")]
        public string CpeType { get; set; }

        [Column("OBJ_TYPE", TypeName = "nvarchar(256)")]
        public string ObjType { get; set; }

        [Column("OBJ_NUMBER", TypeName = "nvarchar(256)")]
        public string ObjNumber { get; set; }

        [Column("BOARD_TYPE", TypeName = "nvarchar(256)")]
        public string BoardType { get; set; }

        [Column("NUBMER_SLOTS_POTS", TypeName = "nvarchar(256)")]
        public string NubmerSlotsPots { get; set; }

        [Column("CROSS_DATA", TypeName = "nvarchar(256)")]
        public string CrossData { get; set; }

        [Column("HOSTNAME", TypeName = "nvarchar(256)")]
        public string Hostname { get; set; }

        [Column("IP_VOICE", TypeName = "nvarchar(256)")]
        public string IpVoice { get; set; }

        [Column("IP_CONTROL", TypeName = "nvarchar(256)")]
        public string IpControl { get; set; }

        [Column("VLAN_CONTROL", TypeName = "nvarchar(256)")]
        public string VlanControl { get; set; }

        [Column("VLAN_VOICE", TypeName = "nvarchar(256)")]
        public string VlanVoice { get; set; }

        [Column("IP_LAN_CONTROL", TypeName = "nvarchar(256)")]
        public string IpLanControl { get; set; }

        [Column("IP_IN_INITI", TypeName = "nvarchar(256)")]
        public string IpInIniti { get; set; }

        [Column("IP_LAN_VOICE", TypeName = "nvarchar(256)")]
        public string IpLanVoice { get; set; }

        [Column("OLD_OAM_UMUX", TypeName = "nvarchar(256)")]
        public string OldOamUmux { get; set; }

        [Column("OLD_OAM_CALLP", TypeName = "nvarchar(256)")]
        public string OldOamCallp { get; set; }

        [Column("IP_CISCO3750", TypeName = "nvarchar(256)")]
        public string IpCISCO3750 { get; set; }

        [Column("IP_OPT82", TypeName = "nvarchar(256)")]
        public string IpOpt82 { get; set; }

        [Column("RESERVE_PORT", TypeName = "nvarchar(256)")]
        public string ReservePort { get; set; }

        [Column("MSAN_RTP_GW_MASK", TypeName = "nvarchar(256)")]
        public string MsanRtpGwMask { get; set; }

        [Column("IP_EPU", TypeName = "nvarchar(256)")]
        public string IpEpu { get; set; }

        [Column("MSAN_EPU_GW_MASK", TypeName = "nvarchar(256)")]
        public string MsanEpuGwMask { get; set; }

        [Column("MKSL_IP", TypeName = "nvarchar(256)")]
        public string MkslIp { get; set; }

        [Column("MKSL_GW_MASK", TypeName = "nvarchar(256)")]
        public string MkslGwMask { get; set; }

        [Column("ACCESS_SWITCH_IP", TypeName = "nvarchar(256)")]
        public string AccessSwitchIp { get; set; }

        [Column("ACCESS_SWITCH_PORT", TypeName = "nvarchar(256)")]
        public string AccessSwitchPort { get; set; }

        [Column("VLAN_PPPOE_IPTV", TypeName = "nvarchar(256)")]
        public string VlanPppoeIptv { get; set; }

        [Column("VLAN_TR69", TypeName = "nvarchar(256)")]
        public string VlanTr69 { get; set; }

        [Column("SERIAL_NUMBER_BOARD_CONTROL", TypeName = "nvarchar(256)")]
        public string SerialNumberBoardControl { get; set; }

        [Column("COMMISSIONING_DATE", TypeName = "nvarchar(512)")]
        public string CommissioningDate { get; set; }

        [Column("COMMENT", TypeName = "text")]
        public string Comment { get; set; }

        [Column("TECHNOLOGY", TypeName = "nvarchar(256)")]
        public string Technology { get; set; }

        [Column("PROTOCOL", TypeName = "nvarchar(256)")]
        public string Protocol { get; set; }

        [Column("VLAN_PPPOE", TypeName = "nvarchar(256)")]
        public string VlanPppoe { get; set; }

        [Column("VLAN_IPTV", TypeName = "nvarchar(256)")]
        public string VlanIptv { get; set; }
    }
}
