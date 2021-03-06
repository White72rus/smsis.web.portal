// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using smsis.web.portal.DAL;

namespace smsis.web.portal.DAL.Migrations
{
    [DbContext(typeof(DataBaseContext))]
    partial class DataBaseContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("smsis.web.portal.DAL.Entityes.ClaimEntity", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID")
                        .HasColumnType("int");

                    b.Property<string>("ClaimType")
                        .HasColumnName("CLAIM_TYPE")
                        .HasColumnType("nvarchar(128)");

                    b.Property<string>("ClaimValue")
                        .HasColumnName("CLAIM_VALUE")
                        .HasColumnType("nvarchar(128)");

                    b.Property<Guid>("UserId")
                        .HasColumnName("USER_ID")
                        .HasColumnType("char(36)");

                    b.HasKey("Id");

                    b.ToTable("Claims");
                });

            modelBuilder.Entity("smsis.web.portal.DAL.Entityes.ImsEntity", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID")
                        .HasColumnType("int");

                    b.Property<string>("AccessSwitchIp")
                        .HasColumnName("ACCESS_SWITCH_IP")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("AccessSwitchPort")
                        .HasColumnName("ACCESS_SWITCH_PORT")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("Addres")
                        .HasColumnName("ADDRES")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("BoardType")
                        .HasColumnName("BOARD_TYPE")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("Capacity")
                        .HasColumnName("CAPACITY")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("City")
                        .HasColumnName("CITY")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("Comment")
                        .HasColumnName("COMMENT")
                        .HasColumnType("text");

                    b.Property<string>("CommissioningDate")
                        .HasColumnName("COMMISSIONING_DATE")
                        .HasColumnType("nvarchar(512)");

                    b.Property<string>("CpeType")
                        .HasColumnName("CPE_TYPE")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("CrossData")
                        .HasColumnName("CROSS_DATA")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("District")
                        .HasColumnName("DISTRICT")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("Filial")
                        .HasColumnName("FILIAL")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("GroupSd")
                        .HasColumnName("GROUP_SD")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("Hostname")
                        .HasColumnName("HOSTNAME")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("IpCISCO3750")
                        .HasColumnName("IP_CISCO3750")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("IpControl")
                        .HasColumnName("IP_CONTROL")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("IpEpu")
                        .HasColumnName("IP_EPU")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("IpInIniti")
                        .HasColumnName("IP_IN_INITI")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("IpLanControl")
                        .HasColumnName("IP_LAN_CONTROL")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("IpLanVoice")
                        .HasColumnName("IP_LAN_VOICE")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("IpOpt82")
                        .HasColumnName("IP_OPT82")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("IpVoice")
                        .HasColumnName("IP_VOICE")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("LinkAgcf")
                        .HasColumnName("LINK_AGCF")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("LinkPcscf")
                        .HasColumnName("LINK_PCSCF")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("MkslGwMask")
                        .HasColumnName("MKSL_GW_MASK")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("MkslIp")
                        .HasColumnName("MKSL_IP")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("MsanEpuGwMask")
                        .HasColumnName("MSAN_EPU_GW_MASK")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("MsanRtpGwMask")
                        .HasColumnName("MSAN_RTP_GW_MASK")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NubmerSlotsPots")
                        .HasColumnName("NUBMER_SLOTS_POTS")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NumbersRange")
                        .HasColumnName("NUMBERS_RANGE")
                        .HasColumnType("nvarchar(2000)");

                    b.Property<string>("ObjNumber")
                        .HasColumnName("OBJ_NUMBER")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("ObjType")
                        .HasColumnName("OBJ_TYPE")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("OldOamCallp")
                        .HasColumnName("OLD_OAM_CALLP")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("OldOamUmux")
                        .HasColumnName("OLD_OAM_UMUX")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("Protocol")
                        .HasColumnName("PROTOCOL")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("Region")
                        .HasColumnName("REGION")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("ReservePort")
                        .HasColumnName("RESERVE_PORT")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("SerialNumberBoardControl")
                        .HasColumnName("SERIAL_NUMBER_BOARD_CONTROL")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("SignVims")
                        .HasColumnName("SIGN_VIMS")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("TechProtocol")
                        .HasColumnName("TECH_PROTOCOL")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("Technology")
                        .HasColumnName("TECHNOLOGY")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("UseCapacity")
                        .HasColumnName("USE_CAPACITY")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("Uss")
                        .HasColumnName("USS")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("VlanControl")
                        .HasColumnName("VLAN_CONTROL")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("VlanIptv")
                        .HasColumnName("VLAN_IPTV")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("VlanPppoe")
                        .HasColumnName("VLAN_PPPOE")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("VlanPppoeIptv")
                        .HasColumnName("VLAN_PPPOE_IPTV")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("VlanTr69")
                        .HasColumnName("VLAN_TR69")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("VlanVoice")
                        .HasColumnName("VLAN_VOICE")
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.ToTable("ims");
                });

            modelBuilder.Entity("smsis.web.portal.DAL.Entityes.LogEntity", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID")
                        .HasColumnType("char(36)");

                    b.Property<DateTime>("BeginDate")
                        .HasColumnName("BEGIN_DATE")
                        .HasColumnType("datetime(6)");

                    b.Property<DateTime>("EndDate")
                        .HasColumnName("END_DATE")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("IdSubject")
                        .HasColumnName("ID_SUBJECT")
                        .HasColumnType("nvarchar(128)");

                    b.Property<string>("SubjectName")
                        .HasColumnName("SUBJECT_NAME")
                        .HasColumnType("nvarchar(128)");

                    b.Property<string>("TypeLog")
                        .HasColumnName("TYPE_LOG")
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.ToTable("Logs");
                });

            modelBuilder.Entity("smsis.web.portal.DAL.Entityes.MssEntity", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID")
                        .HasColumnType("int");

                    b.Property<string>("BaseDoc")
                        .HasColumnName("BASE_DOC")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("City")
                        .HasColumnName("CITY")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("Comment")
                        .HasColumnName("COMMENT")
                        .HasColumnType("nvarchar(512)");

                    b.Property<string>("CommissioningDate")
                        .HasColumnName("COMMISSIONING_DATE")
                        .HasColumnType("nvarchar(512)");

                    b.Property<string>("ContactSideB")
                        .HasColumnName("CONTACT_SIDE_B")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("DPC")
                        .HasColumnName("DPC")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("District")
                        .HasColumnName("DISTRICT")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("EDGE")
                        .HasColumnName("EDGE")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("LinkMgcf")
                        .HasColumnName("LINK_MGCF")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("MctetGctet")
                        .HasColumnName("MCTET_GCTET")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("ObjMss")
                        .HasColumnName("OBJ_MSS")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("PortNumberE1")
                        .HasColumnName("PORT_NUMBER_E1")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("Prefix")
                        .HasColumnName("PREFIX")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("SL")
                        .HasColumnName("SL")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("SignalType")
                        .HasColumnName("SIGNAL_TYPE")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("State")
                        .HasColumnName("STATE")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("TS")
                        .HasColumnName("TS")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("TransportSDH")
                        .HasColumnName("TRANSPORT_SDH")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("TrunkGroup")
                        .HasColumnName("TRUNK_GROUP")
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.ToTable("mss");
                });

            modelBuilder.Entity("smsis.web.portal.DAL.Entityes.UserEntity", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID")
                        .HasColumnType("char(36)");

                    b.Property<string>("Email")
                        .HasColumnName("EMAIL")
                        .HasColumnType("nvarchar(128)");

                    b.Property<string>("Login")
                        .HasColumnName("LOGIN")
                        .HasColumnType("nvarchar(128)");

                    b.Property<string>("Name")
                        .HasColumnName("NAME")
                        .HasColumnType("nvarchar(128)");

                    b.Property<string>("Password")
                        .HasColumnName("PASS")
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("Role")
                        .HasColumnName("ROLE")
                        .HasColumnType("nvarchar(128)");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });
#pragma warning restore 612, 618
        }
    }
}
