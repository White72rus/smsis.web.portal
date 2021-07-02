var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Output, EventEmitter } from '@angular/core';
import { AccountService } from "../services/account.service";
let AccountComponent = class AccountComponent {
    constructor(account) {
        this.account = account;
        this.authSuccess = false;
        this.authEmitt = new EventEmitter();
    }
    ngOnInit() {
    }
    onLogin() {
        this.account.login({ "Name": this.login, "Password": this.pass }).subscribe(d => {
            console.log("Response state: " + d.ok + " Code: " + d.status);
            if (d.ok) {
                this.input = "Successfully";
                this.authSuccess = true;
                this.authEmitt.emit(this.authSuccess);
                this.account.token = d.body["Token"];
            }
        });
    }
    onChange(wors) {
    }
};
__decorate([
    Output()
], AccountComponent.prototype, "authEmitt", void 0);
AccountComponent = __decorate([
    Component({
        selector: 'account',
        templateUrl: './account.component.html',
        styleUrls: ['./account.component.scss'],
        providers: [AccountService],
    })
], AccountComponent);
export { AccountComponent };
//# sourceMappingURL=account.component.js.map