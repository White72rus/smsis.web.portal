var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { QMessage } from "../QMessage";
import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { SiglalrService } from '../services/siglalr.service';
import { ImsData } from "./ImsData";
import { TableHeaders } from "./TableHeaders";
import { MssData } from "./MssData";
import { NotifyComponent } from "../notify/notify.component";
import { ClaimTypes } from '../ClaimTypes';
import { Help } from '../Infrastructure/Help';
let DataBaseComponent = class DataBaseComponent {
    constructor(httpService, signalRService, notify, account, permissionService) {
        this.httpService = httpService;
        this.signalRService = signalRService;
        this.notify = notify;
        this.account = account;
        this.permissionService = permissionService;
        this.doc = document;
        this.count = 0;
        this.stringSearch = "";
        this.checkIms = "Абонентский уровень vIMS";
        this.checkMss = "МСС на SMG vIMS";
        this.isIms = false;
        this.isMss = false;
        this.show = false;
        this.base = null;
        this.itemList = [];
        this.imsTableElement = new TableHeaders().getIms();
        this.mssTableElement = new TableHeaders().getMss();
        this.imsTableHeader = [];
        this.mssTableHeader = [];
        this.isAuth = false;
        this.claims = this.account.claims;
        this.isMenu = false;
        this.newItemShow = false;
        this.imsFieldDescription = new ImsData().getData();
        this.mssFieldDescription = new MssData().value;
        for (let i = 0; i < this.imsTableElement.length; i++) {
            const element = this.imsTableElement[i];
            this.imsTableHeader[i] = this.imsFieldDescription[element];
        }
        for (let i = 0; i < this.mssTableElement.length; i++) {
            const element = this.mssTableElement[i];
            this.mssTableHeader[i] = this.mssFieldDescription[element];
        }
        this.permission = permissionService.getPermission();
        this.userName = this.claims[ClaimTypes.Name];
        this.userRole = this.claims[ClaimTypes.Role];
    }
    ngOnInit() {
        this.signalRService.run(); // Init and run signalR
        console.log("Data-Base: Init");
        this.account.isAuth().subscribe(response => {
            if (response.ok) {
                console.log("Is Auth: " + response.ok);
                this.isAuth = true;
            }
        }, (err) => {
            if (err.status === 401) {
                console.log("Is Auth: " + err.ok);
                this.isAuth = false;
                this.logout();
            }
        });
    }
    login() {
        console.log(window.location.origin);
    }
    logout() {
        window.localStorage.clear();
        document.location.reload();
    }
    checkTable() {
        if (this.isIms) {
            this.newItemObj = new ImsData().getData();
            this.itemList = new ImsData().array;
        }
        if (this.isMss) {
            this.newItemObj = new MssData().value;
            this.itemList = new MssData().array;
        }
        for (const key in this.newItemObj) {
            if (Object.prototype.hasOwnProperty.call(this.newItemObj, key)) {
                const element = this.newItemObj[key];
                this.newItemObj[key] = "";
            }
        }
        // Чистим объект с результатом запроса (данные с БД).
        this.responseObj = [];
        // console.log(this.newItemObj);
    }
    onMenuShow() {
        this.isMenu = !this.isMenu;
    }
    onCheck(arg) {
        this.notify.onEvent();
        this.base = arg;
        if (arg === "ims") {
            this.isIms = true;
            this.isMss = false;
        }
        if (arg === "mss") {
            this.isIms = false;
            this.isMss = true;
        }
        this.checkTable();
    }
    onSubmit(e) {
        // Debug
        console.log(this.permission);
        // Debug
        if (this.stringSearch.length <= 0)
            return;
        if (this.isIms || this.isMss) {
            let query = new QMessage();
            query.query = this.stringSearch;
            if (this.isIms) {
                query.table = "ims";
            }
            else if (this.isMss) {
                query.table = "mss";
            }
            this.httpService.getData(query).subscribe(d => {
                let arr = this.toArray(d);
                this.count = arr.length;
                this.responseObj = this.toArray(d);
                console.log(d);
            });
        }
    }
    showDetail(arg) {
        if (this.show) {
            this.show = !this.show;
            return;
        }
        this.show = !this.show;
        this.detailList = this.responseObj[arg];
        // console.log(typeof this.detailList);
        // console.log(this.detailList);
    }
    newBtnClick() {
        this.responseObj = [];
        if (!this.isIms && !this.isMss)
            return;
        if (this.isIms) {
            this.newItemList = this.imsFieldDescription;
        }
        else if (this.isMss) {
            this.newItemList = this.mssFieldDescription;
        }
        this.newItemShow = !this.newItemShow;
    }
    onSave(value) {
        let query = new QMessage();
        query.data = JSON.stringify(value);
        if (this.isIms) {
            query.table = "ims";
        }
        else if (this.isMss) {
            query.table = "mss";
        }
        // this.httpService.editData(value.Id, query.table, value).subscribe();
        this.httpService.editJsonData(value.Id, query).subscribe();
        console.log(value);
    }
    onSaveNew(value) {
        const array = ["Filial", "Region", "District", "City", "Addres", "NumbersRange", "Capacity",
            "Technology", "Protocol", "CpeType", "ObjType", "Hostname", "IpVoice", "IpControl", "Comment",
        ];
        for (const key in this.newItemObj) {
            if (Object.prototype.hasOwnProperty.call(this.newItemObj, key)) {
                const element = this.newItemObj[key];
                if (!Help.contains(key, array))
                    continue;
                if (element == "") {
                    console.log("Data not saved. All fields empty.");
                    let fild = this.doc.querySelector("#" + key);
                    fild.classList.add("failed-fild");
                    return;
                }
            }
        }
        this.sendDataForSaveNew(value);
    }
    sendDataForSaveNew(value) {
        console.log(this.newItemObj);
        value["Id"] = 0;
        let query = new QMessage();
        query.data = JSON.stringify(value);
        if (this.isIms) {
            query.table = "ims";
        }
        else if (this.isMss) {
            query.table = "mss";
        }
        this.httpService.putData(query).subscribe();
    }
    toArray(obj) {
        let arr = [];
        for (const key in obj) {
            // arr.push({[key] : obj[key]});
            arr.push(obj[key]);
        }
        return arr;
    }
};
DataBaseComponent = __decorate([
    Component({
        selector: 'data-base',
        templateUrl: './data-base.component.html',
        styleUrls: ['./data-base.component.scss'],
        providers: [HttpService, SiglalrService, NotifyComponent]
    })
], DataBaseComponent);
export { DataBaseComponent };
//# sourceMappingURL=data-base.component.js.map