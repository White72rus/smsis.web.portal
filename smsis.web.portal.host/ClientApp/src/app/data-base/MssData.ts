import { Mss } from "../types/Mss";

export class MssData {
    private readonly _mssFieldDescription : Mss = {
        EDGE: "EDGE",
        LinkMgcf: "Привязка к оборудованию mgcf vIMS",
        PornNumberE1: "№ порта E1",
        SignalType: "Тип сигнализации",
        DPC: "Dpc",
        TS: "Ts",
        SL: "Sl",
        MctetGctet: "МЦТЭТ / ГЦТЭТ",
        District: "Район",
        City: "Территория (город/посёлок/село/деревня)",
        ObjMss: "Наименование объекта МСС",
        TrunkGroup: "Trunk Group",
        TransportSDH: "Транспорт (данные SDH)",
        Prefix: "Prefix",
        ContactSideB: "Контакты на стороне Б",
        State: "Статус (тест/ в работе/ бронь)",
        CommissioningDate: "Дата принятия в работу",
        BaseDoc: "Основание: № Документа, распоряжения, проекта",
        Comment: "Комментарии",
    }

    private readonly _array : string[] = [
        "LinkMgcf",         "ObjMss",
        "PornNumberE1",     "TrunkGroup",
        "SignalType",       "TransportSDH",
        "DPC",              "Prefix",
        "TS",               "ContactSideB",
        "SL",               "State",
        "MctetGctet",       "CommissioningDate",
        "District",         "BaseDoc",
        "City",             "Comment",
        "EDGE",
    ];

    public get array() : string[] {
        return this._array;
    }
    
    public get value() : Mss {
        return this._mssFieldDescription;
    }
}
