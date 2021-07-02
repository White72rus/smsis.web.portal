var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Input } from '@angular/core';
import { ImsData } from "../ImsData";
import { MssData } from "../MssData";
let ItemComponent = class ItemComponent {
    constructor(permissionService) {
        this.permissionService = permissionService;
        this.edit = false;
        // console.log("constructor: item - " + this.name);
        this.permission = permissionService.getPermission();
    }
    ngOnInit() {
        if (this.table) {
            this.itemDescription = new ImsData().getData();
        }
        else {
            this.itemDescription = new MssData().value;
        }
        this.itemName = this.itemDescription[this.name];
        this.itemValue = this.detailList[this.name];
        this.stringValue = this.itemValue;
    }
    clickOnEdit() {
        this.edit = true;
    }
    clickOnOk() {
        this.edit = false;
        this.detailList[this.name] = this.stringValue;
        this.itemValue = this.stringValue;
        console.log("name: " + this.name + " value:" + this.stringValue);
        console.log(this.detailList);
    }
};
__decorate([
    Input()
], ItemComponent.prototype, "name", void 0);
__decorate([
    Input()
], ItemComponent.prototype, "value", void 0);
__decorate([
    Input()
], ItemComponent.prototype, "detailList", void 0);
__decorate([
    Input()
], ItemComponent.prototype, "table", void 0);
ItemComponent = __decorate([
    Component({
        selector: 'item',
        templateUrl: './item.component.html',
        styleUrls: ['./item.component.scss']
    })
], ItemComponent);
export { ItemComponent };
//# sourceMappingURL=item.component.js.map