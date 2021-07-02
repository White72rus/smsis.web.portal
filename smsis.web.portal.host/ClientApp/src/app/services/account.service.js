var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
let AccountService = class AccountService {
    constructor(http) {
        this.http = http;
        //  "http://tmn-web-smsis.ur.rt.ru/api.service/account/"
        //  "http://localhost:5010/account/"
        this._url = "http://localhost:5010/account/";
    }
    // Return claims.
    get claims() {
        return this.parseClaims();
    }
    parseClaims() {
        const token = this.token;
        let strArr = token.split(".");
        const payload = JSON.parse(atob(strArr[1]));
        return payload;
    }
    get token() {
        return window.localStorage.getItem(".AspNetCore.I.Session.Id");
    }
    set token(v) {
        window.localStorage.setItem(".AspNetCore.I.Session.Id", v);
    }
    login(args) {
        let raw = JSON.stringify(args);
        return this.http.post(this._url + "login", raw, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
            observe: "response",
            params: new HttpParams({})
        });
    }
    isAuth() {
        let raw = JSON.stringify("");
        return this.http.post(this._url, raw, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            }),
            observe: "response",
            params: new HttpParams({})
        });
    }
    getToken() {
        const token = this.token;
        let strArr = token.split(".");
        const obj = {
            header: JSON.parse(atob(strArr[0])),
            payload: JSON.parse(atob(strArr[1])),
        };
        console.dir("Token:" + obj);
        return obj;
    }
};
AccountService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AccountService);
export { AccountService };
//# sourceMappingURL=account.service.js.map