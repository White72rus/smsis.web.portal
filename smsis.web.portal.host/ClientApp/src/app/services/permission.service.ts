import { Injectable } from '@angular/core';
import { Permission } from '../types';
import { AccountService } from './account.service';

@Injectable({
    providedIn: 'root',
})
export class PermissionService {

    constructor(private accountService : AccountService) { }

    public get isWrite() : boolean {
        const permission = this.getPermission();
        return permission["write"];
    }

    public getPermission() : Permission {
        const obj = this.accountService.getToken();
        const permission = obj.payload.Permission;
        console.log(permission);
        //console.log(JSON.parse(atob(permission)));
        return JSON.parse(atob(permission))
    }

    

    public setPermission(permission : Permission) : void {
        let bse = btoa(JSON.stringify(permission));
        window.sessionStorage.setItem(".AspNetCore.I.Session.p", bse);
    }
}
