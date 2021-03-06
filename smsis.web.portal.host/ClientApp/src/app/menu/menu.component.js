var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { ClaimTypes } from '../ClaimTypes';
let MenuComponent = class MenuComponent {
    constructor(accountService) {
        this.accountService = accountService;
        this.isAdmin = false;
        this.claims = this.accountService.claims;
    }
    ngOnInit() {
        this.str = new Document().URL;
        //console.log(this.str);
        if (this.claims[ClaimTypes.Role] == "Administrator")
            this.isAdmin = true;
    }
};
MenuComponent = __decorate([
    Component({
        selector: 'menu',
        templateUrl: './menu.component.html',
        styleUrls: ['./menu.component.scss']
    })
], MenuComponent);
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map