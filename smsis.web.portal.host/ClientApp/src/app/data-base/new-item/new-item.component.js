var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Input } from '@angular/core';
import { Help } from 'src/app/Infrastructure/Help';
import { ImsData } from '../ImsData';
import { MssData } from '../MssData';
let NewItemComponent = class NewItemComponent {
    constructor() {
        this.star = "";
        this.required = false;
    }
    ngOnInit() {
        if (this.table) {
            this.itemDescription = new ImsData().getData();
        }
        else {
            this.itemDescription = new MssData().value;
        }
        this.name = this.itemDescription[this.value];
        const array = ["Filial", "Region", "District", "City", "Addres", "NumbersRange", "Capacity",
            "Technology", "Protocol", "CpeType", "ObjType", "Hostname", "IpVoice", "IpControl", "Comment",
        ];
        if (Help.contains(this.value, array)) {
            this.star = "*";
        }
        // console.log(`Name: ${this.name}, Value: ${this.value}`);
    }
    onChange() {
        this.itemObj[this.value] = this.valueInput;
    }
};
__decorate([
    Input()
], NewItemComponent.prototype, "value", void 0);
__decorate([
    Input()
], NewItemComponent.prototype, "itemObj", void 0);
__decorate([
    Input()
], NewItemComponent.prototype, "table", void 0);
NewItemComponent = __decorate([
    Component({
        selector: 'new-item',
        templateUrl: './new-item.component.html',
        styleUrls: ['./new-item.component.scss']
    })
], NewItemComponent);
export { NewItemComponent };
//# sourceMappingURL=new-item.component.js.map