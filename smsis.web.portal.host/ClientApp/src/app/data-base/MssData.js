export class MssData {
    constructor() {
        this._mssFieldDescription = {
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
        };
        this._array = [
            "LinkMgcf", "ObjMss",
            "PornNumberE1", "TrunkGroup",
            "SignalType", "TransportSDH",
            "DPC", "Prefix",
            "TS", "ContactSideB",
            "SL", "State",
            "MctetGctet", "CommissioningDate",
            "District", "BaseDoc",
            "City", "Comment",
            "EDGE",
        ];
    }
    get array() {
        return this._array;
    }
    get value() {
        return this._mssFieldDescription;
    }
}
//# sourceMappingURL=MssData.js.map