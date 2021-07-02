import { QMessage } from "../QMessage";
import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { SiglalrService } from '../services/siglalr.service';
import { Ims, Mss, Permission } from "../types";
import { ImsData } from "./ImsData";
import { TableHeaders } from "./TableHeaders";
import * as signalR from "@aspnet/signalr";
import { MssData } from "./MssData";
import { NotifyComponent } from "../notify/notify.component";
import { AccountService } from "../services/account.service";
import { PermissionService } from "../services/permission.service";
import { ClaimTypes } from '../ClaimTypes';
import { Help } from '../Infrastructure/Help';
import { HttpErrorResponse } from "@angular/common/http";

@Component({
    selector: 'data-base',
    templateUrl: './data-base.component.html',
    styleUrls: ['./data-base.component.scss'],
    providers: [HttpService, SiglalrService, NotifyComponent]
})
export class DataBaseComponent implements OnInit {
    private doc : Document = document;
    public count: number = 0;
    public stringSearch: string = "";
    public responseObj: any;
    public detailList: any;
    public checkIms: string = "Абонентский уровень vIMS";
    public checkMss: string = "МСС на SMG vIMS";
    public isIms: boolean = false;
    public isMss: boolean = false;
    public show: boolean = false;
    public base: string = null;
    public imsFieldDescription: Ims;
    public mssFieldDescription: Mss;
    public itemList: string[] = [];
    public newItemObj: any;
    public imsTableElement: any = new TableHeaders().getIms();
    public mssTableElement: any = new TableHeaders().getMss();
    public imsTableHeader: string[] = [];
    public mssTableHeader: string[] = [];
    public newItemList: any;
    public isAuth : boolean = false;

    public readonly userName : string;
    public readonly userRole : string;

    public permission : Permission;
    public claims : any = this.account.claims;

    public static readonly _notify;

    constructor(private httpService: HttpService, private signalRService : SiglalrService, 
                public notify: NotifyComponent, private account: AccountService, 
                private permissionService : PermissionService) {

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

    ngOnInit(): void {
        this.signalRService.run();  // Init and run signalR
        console.log("Data-Base: Init");
        this.account.isAuth().subscribe(response => {
            if (response.ok) {
                console.log("Is Auth: " + response.ok);
                this.isAuth = true;
            }
        }, (err : HttpErrorResponse) => {
            if (err.status === 401) {
                console.log("Is Auth: " + err.ok);
                this.isAuth = false;
                this.logout();
            }
        });
        
    }

    

    public login() : void {
        console.log(window.location.origin);
    }

    public logout() : void {
        window.localStorage.clear();
        document.location.reload();
    }

    private checkTable(){
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


    public isMenu : boolean = false;
    public onMenuShow() : void {
        this.isMenu = !this.isMenu;
    }

    public onCheck(arg) : void {
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

    public onSubmit(e) : void {

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
            } else if (this.isMss) {
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

    public showDetail(arg: number) : void {
        if (this.show) {
            this.show = !this.show;
            return;
        }
        this.show = !this.show;
        this.detailList = this.responseObj[arg];
        // console.log(typeof this.detailList);
        // console.log(this.detailList);
    }

    public newItemShow: boolean = false;

    public newBtnClick(): void {
        this.responseObj = [];
        if (!this.isIms && !this.isMss)
            return;

        if (this.isIms) {
            this.newItemList = this.imsFieldDescription;

        } else if (this.isMss) {
            this.newItemList = this.mssFieldDescription;
        }

        this.newItemShow = !this.newItemShow;
    }

    public onSave(value : Ims) : void {
        let query = new QMessage();
        query.data = JSON.stringify(value);
        if (this.isIms) {
            query.table = "ims";
        } else if (this.isMss) {
            query.table = "mss";
        }

        // this.httpService.editData(value.Id, query.table, value).subscribe();
        this.httpService.editJsonData(value.Id, query).subscribe();

        console.log(value);
    }

    

    public onSaveNew(value : any) : void {
        
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

    
    private sendDataForSaveNew(value : any) : void{
        console.log(this.newItemObj);

        value["Id"] = 0;
        let query = new QMessage();
        query.data = JSON.stringify(value);

        if (this.isIms) {
            query.table = "ims";
        } else if (this.isMss) {
            query.table = "mss";
        }

        this.httpService.putData(query).subscribe();
    }

    private toArray(obj: Object): any[] {
        let arr = [];
        for (const key in obj) {
            // arr.push({[key] : obj[key]});
            arr.push(obj[key]);
        }
        return arr;
    }
}
