export class TableHeaders {
    private ims : string[] = [
        "GroupSd",
        "Filial",
        "Region",
        "Districtcity",
        "City",
        "Adrres",
        "NumbersRange",
        "Uss",
        "Capacity",
        "UseCapacity",
        "Technology",
        "Protocol",
        "CpeType",
        "ObjType",
        "Hostname",
        "IpVoice",
        "IpControl"];

    private mss : string[] = [
        "EDGE",
        "LinkMgcf",
        "PornNumberE1",
        "SignalType",
        "Dpc",
        "Ts",
        "Sl",
        "MctetGctet",
        "District",
        "City",
        "ObjMss",
        "TrunkGroup",
        "TransportSdh",
        "Prefix",
        "State"];
    
    public getIms() : string[]{
        return this.ims;
    }

    public getMss() : string[]{
        return this.mss;
    }

}
