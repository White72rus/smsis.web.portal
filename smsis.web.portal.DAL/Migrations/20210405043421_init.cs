using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace smsis.web.portal.DAL.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Claims",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    USER_ID = table.Column<Guid>(nullable: false),
                    CLAIM_TYPE = table.Column<string>(type: "nvarchar(128)", nullable: true),
                    CLAIM_VALUE = table.Column<string>(type: "nvarchar(128)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Claims", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "ims",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    LINK_AGCF = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    LINK_PCSCF = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    SIGN_VIMS = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    GROUP_SD = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    FILIAL = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    REGION = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    DISTRICT = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    CITY = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    ADDRES = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    NUMBERS_RANGE = table.Column<string>(type: "nvarchar(2000)", nullable: true),
                    USS = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    CAPACITY = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    USE_CAPACITY = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    TECH_PROTOCOL = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    CPE_TYPE = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    OBJ_TYPE = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    OBJ_NUMBER = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    BOARD_TYPE = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    NUBMER_SLOTS_POTS = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    CROSS_DATA = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    HOSTNAME = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    IP_VOICE = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    IP_CONTROL = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    VLAN_CONTROL = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    VLAN_VOICE = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    IP_LAN_CONTROL = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    IP_IN_INITI = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    IP_LAN_VOICE = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    OLD_OAM_UMUX = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    OLD_OAM_CALLP = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    IP_CISCO3750 = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    IP_OPT82 = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    RESERVE_PORT = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    MSAN_RTP_GW_MASK = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    IP_EPU = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    MSAN_EPU_GW_MASK = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    MKSL_IP = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    MKSL_GW_MASK = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    ACCESS_SWITCH_IP = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    ACCESS_SWITCH_PORT = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    VLAN_PPPOE_IPTV = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    VLAN_TR69 = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    SERIAL_NUMBER_BOARD_CONTROL = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    COMMISSIONING_DATE = table.Column<string>(type: "nvarchar(512)", nullable: true),
                    COMMENT = table.Column<string>(type: "text", nullable: true),
                    TECHNOLOGY = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    PROTOCOL = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    VLAN_PPPOE = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    VLAN_IPTV = table.Column<string>(type: "nvarchar(256)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ims", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Logs",
                columns: table => new
                {
                    ID = table.Column<Guid>(nullable: false),
                    ID_SUBJECT = table.Column<string>(type: "nvarchar(128)", nullable: true),
                    SUBJECT_NAME = table.Column<string>(type: "nvarchar(128)", nullable: true),
                    TYPE_LOG = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    BEGIN_DATE = table.Column<DateTime>(nullable: false),
                    END_DATE = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Logs", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "mss",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    EDGE = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    LINK_MGCF = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    PORT_NUMBER_E1 = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    SIGNAL_TYPE = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    DPC = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    TS = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    SL = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    MCTET_GCTET = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    DISTRICT = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    CITY = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    OBJ_MSS = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    TRUNK_GROUP = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    TRANSPORT_SDH = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    PREFIX = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    CONTACT_SIDE_B = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    STATE = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    COMMISSIONING_DATE = table.Column<string>(type: "nvarchar(512)", nullable: true),
                    BASE_DOC = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    COMMENT = table.Column<string>(type: "nvarchar(512)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_mss", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    ID = table.Column<Guid>(nullable: false),
                    NAME = table.Column<string>(type: "nvarchar(128)", nullable: true),
                    ROLE = table.Column<string>(type: "nvarchar(128)", nullable: true),
                    PASS = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    LOGIN = table.Column<string>(type: "nvarchar(128)", nullable: true),
                    EMAIL = table.Column<string>(type: "nvarchar(128)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Claims");

            migrationBuilder.DropTable(
                name: "ims");

            migrationBuilder.DropTable(
                name: "Logs");

            migrationBuilder.DropTable(
                name: "mss");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
