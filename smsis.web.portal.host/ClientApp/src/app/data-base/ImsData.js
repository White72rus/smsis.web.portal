export class ImsData {
    constructor() {
        // Объект с описанием полей.
        this.imsFieldDescription = {
            LinkAgcf: "Привязка к оборудованию Agcf vIMS/Н248",
            LinkPcscf: "Привязка к оборудованию PCSCF vIMS",
            SignVims: "Oбозначение на платформе vIMS",
            GroupSd: "Группа для отправки заявки в SD",
            Filial: "Платформа / Филиал",
            Region: "Региональный центр",
            District: "Район",
            City: "Территория (город/посёлок/село/деревня)",
            Addres: "Адрес установки оборудования",
            NumbersRange: "Нумерация абонентов",
            Uss: "Наличие УСС",
            Capacity: "Монтированная абонентская ёмкость",
            UseCapacity: "Задействованная абонентская ёмкость (ОТА/ШПД)",
            TechProtocol: "Платформа/протокол",
            CpeType: "Тип абонентского оборудования",
            ObjType: "Тип объекта (УМСД, ТУД и т.д)",
            ObjNumber: "№ объекта",
            BoardType: "ТИП плат",
            NubmerSlotsPots: "Номера слотов с платами POTS",
            CrossData: "Данные кросса ТУД/ЗПП/РШ",
            Hostname: "MSAN hostname",
            IpVoice: "IP голос MSAN SIP/RTP IP vrf vIMS-MSAN (VLAN хх)",
            IpControl: "IP по управлению MSAN Mgmt IP (VLAN хх)",
            VlanControl: "VLAN ID управление VoIP-шлюз",
            VlanVoice: "VLAN ID голос",
            IpLanControl: "Адрес сети управления",
            IpInIniti: "Ip адрес MSAN (в INITI SOLO)",
            IpLanVoice: "Адрес сети для голоса",
            OldOamUmux: "Old OAM UMUX (УМСД)",
            OldOamCallp: "Old OAM CallP (УМСД)",
            IpCISCO3750: "IP-adress Cisco3750 (УМСД)",
            IpOpt82: "IP адрес коммутатора/ тип коммутатора Формат Option 82",
            ReservePort: "Забронированный порт на коммутаторе",
            MsanRtpGwMask: "MSAN SIP/RTP def GW/mask vrf vIMS-MSAN",
            IpEpu: "ЭПУ IP (VLAN 11)",
            MsanEpuGwMask: "MSAN/ЭПУ def GW/mask",
            MkslIp: "МК-СЛ IP vrf CORP-censor VLAN 246",
            MkslGwMask: "MSAN/ЭПУ def GW/mask",
            AccessSwitchIp: "Access switch IP",
            AccessSwitchPort: "Access switch port",
            VlanPppoeIptv: "VLAN PPPoE / VLAN IP-TV",
            VlanTr69: "VLAN TR-69",
            SerialNumberBoardControl: "Серийный № платы управления (nt-a)",
            CommissioningDate: "Дата переключения/принятия в работу/ПНР",
            Comment: "Комментарии",
            Technology: "Платформа",
            Protocol: "Протокол",
            VlanPppoe: "VLAN PPPoE",
            VlanIptv: "VLAN IP-TV",
            Id: "Id",
        };
        // Массив с именами полей.
        this._array = [
            "LinkAgcf", "VlanVoice",
            "LinkPcscf", "VlanControl",
            "SignVims", "IpLanControl",
            "GroupSd", "IpInIniti",
            "Filial", "IpLanVoice",
            "Region", "OldOamUmux",
            "District", "OldOamCallp",
            "City", "IpCISCO3750",
            "Addres", "IpOpt82",
            "NumbersRange", "ReservePort",
            "Uss", "MsanRtpGwMask",
            "Capacity", "IpEpu",
            "UseCapacity", "MsanEpuGwMask",
            "Technology", "MkslIp",
            "Protocol", "MkslGwMask",
            /*"@TechProtocol",*/
            "CpeType", "AccessSwitchIp",
            "ObjType", "AccessSwitchPort",
            "ObjNumber", "VlanPppoe",
            "BoardType", "VlanIptv",
            /*"@VlanPppoeIptv",*/
            "NubmerSlotsPots", "VlanTr69",
            "CrossData", "SerialNumberBoardControl",
            "Hostname", "CommissioningDate",
            "IpVoice", "Comment",
            "IpControl",
        ];
    }
    get array() {
        return this._array;
    }
    getData() {
        return this.imsFieldDescription;
    }
}
//# sourceMappingURL=ImsData.js.map