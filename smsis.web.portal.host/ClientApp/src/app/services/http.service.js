var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from "@angular/common/http";
let HttpService = class HttpService {
    constructor(http) {
        this.http = http;
        //  "http://tmn-web-smsis.ur.rt.ru/api.service/api/baseapi/"
        //  "http://localhost:5010/api/baseapi/"
        this._url = "http://localhost:5010/api/baseapi/";
        this._urlApiUser = "http://localhost:5010/api/admin/";
    }
    get token() {
        return window.localStorage.getItem(".AspNetCore.I.Session.Id");
    }
    getData(query) {
        let raw = JSON.stringify(query);
        return this.http.post(this._url, raw, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            }),
            params: new HttpParams({})
        });
    }
    putData(query) {
        let raw = JSON.stringify(query);
        return this.http.put(this._url, raw, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            }),
            params: new HttpParams({})
        });
    }
    editData(id, table, value) {
        let raw = JSON.stringify(value);
        return this.http.post(`${this._url}${table}/${id}`, raw, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            }),
            params: new HttpParams({})
        });
    }
    editJsonData(id, query) {
        let raw = JSON.stringify(query);
        return this.http.post(`${this._url}json/${id}`, raw, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            }),
            params: new HttpParams({})
        });
    }
    getUsers() {
        // let raw = JSON.stringify(query);
        return this.http.get(this._urlApiUser, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            }),
            observe: "response",
            params: new HttpParams({})
        });
    }
    addUsers(query) {
        let raw = JSON.stringify(query);
        return this.http.post(this._urlApiUser, raw, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            }),
            observe: "response",
            params: new HttpParams({})
        });
    }
};
HttpService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], HttpService);
export { HttpService };
//# sourceMappingURL=http.service.js.map