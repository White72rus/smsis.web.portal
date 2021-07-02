import { Ims, Mss, Permission } from "../../types";

import { Component, Input, OnInit } from '@angular/core';
import { PermissionService } from 'src/app/services/permission.service';
import { ImsData } from "../ImsData";
import { MssData } from "../MssData";

@Component({
    selector: 'item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

    @Input() name;
    @Input() value;
    @Input() detailList;
    @Input() table;

    public edit: boolean = false;
    public itemName: string;
    public itemValue: string;
    public stringValue: string;
    private itemDescription : any;

    public permission : Permission;

    constructor(private permissionService : PermissionService) {
        // console.log("constructor: item - " + this.name);
        this.permission = permissionService.getPermission();
    }

    ngOnInit() {
        if (this.table) {
            this.itemDescription = new ImsData().getData();
        } else {
            this.itemDescription = new MssData().value;
        }
        this.itemName = this.itemDescription[this.name];
        this.itemValue = this.detailList[this.name];
        this.stringValue = this.itemValue;
    }

    clickOnEdit(): void {
        this.edit = true;
    }

    clickOnOk(): void {
        this.edit = false;
        this.detailList[this.name] = this.stringValue;
        this.itemValue = this.stringValue;
        console.log("name: " + this.name + " value:" + this.stringValue);
        console.log(this.detailList);
    }
}
