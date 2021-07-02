import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from "@angular/common/http";
import { QMessage } from '../QMessage';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    //  "http://tmn-web-smsis.ur.rt.ru/api.service/api/baseapi/"
    //  "http://localhost:5010/api/baseapi/"
    private readonly _url : string = "http://localhost:5010/api/baseapi/";
    private readonly _urlApiUser : string = "http://localhost:5010/api/admin/";

    constructor(private http: HttpClient) { }

    
    private get token() : string {
        return window.localStorage.getItem(".AspNetCore.I.Session.Id");
    }

    public getData(query: QMessage) : Observable<object> {
        let raw = JSON.stringify(query);
        return this.http.post(this._url, raw, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            }),
            params: new HttpParams({

            })
        });
    }

    public putData(query: QMessage) : Observable<object> {
        let raw = JSON.stringify(query);

        return this.http.put(this._url, raw, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            }),
            params: new HttpParams({})
        });
    }

    public editData(id: string, table: string, value: any) : Observable<object> {
        let raw = JSON.stringify(value);

        return this.http.post(`${this._url}${table}/${id}`, raw, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            }),
            params: new HttpParams({})
        });
    }

    public editJsonData(id: string, query: QMessage) : Observable<object> {
        let raw = JSON.stringify(query);

        return this.http.post(`${this._url}json/${id}`, raw, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            }),
            params: new HttpParams({})
        });
    }

    public getUsers() : Observable<HttpResponse<Object>> {
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

    public addUsers(query: any) : Observable<HttpResponse<Object>> {
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
}
