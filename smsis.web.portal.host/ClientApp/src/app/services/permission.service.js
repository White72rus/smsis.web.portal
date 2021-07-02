var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
let PermissionService = class PermissionService {
    constructor(accountService) {
        this.accountService = accountService;
    }
    get isWrite() {
        const permission = this.getPermission();
        return permission["write"];
    }
    getPermission() {
        const obj = this.accountService.getToken();
        const permission = obj.payload.Permission;
        console.log(permission);
        //console.log(JSON.parse(atob(permission)));
        return JSON.parse(atob(permission));
    }
    setPermission(permission) {
        let bse = btoa(JSON.stringify(permission));
        window.sessionStorage.setItem(".AspNetCore.I.Session.p", bse);
    }
};
PermissionService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], PermissionService);
export { PermissionService };
//# sourceMappingURL=permission.service.js.map