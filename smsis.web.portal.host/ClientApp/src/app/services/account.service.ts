import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
    //  "http://tmn-web-smsis.ur.rt.ru/api.service/account/"
    //  "http://localhost:5010/account/"

    private readonly _url : string = "http://localhost:5010/account/";

    constructor(private http: HttpClient) { }

    // Return claims.
    public get claims() : any {
        return this.parseClaims();
    }
    
    private parseClaims() : any {
        const token = this.token;
        let strArr = token.split(".");
        const payload = JSON.parse(atob(strArr[1]));
        return payload;
    }

    public get token() : string {
        return window.localStorage.getItem(".AspNetCore.I.Session.Id");
    }
    public set token(v : string) {
        window.localStorage.setItem(".AspNetCore.I.Session.Id", v);
    }

    public login(args : any) : Observable<HttpResponse<Object>> {
        let raw = JSON.stringify(args);
        return this.http.post(this._url + "login", raw, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
            observe: "response",
            params: new HttpParams({})
        });
    }

    public isAuth() : Observable<HttpResponse<Object>> {
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

    public getToken() : any {
        const token = this.token;
        let strArr = token.split(".");

        const obj = {
            header: JSON.parse(atob(strArr[0])),
            payload: JSON.parse(atob(strArr[1])),
        }

        console.dir("Token:" + obj);
        return obj
    }


}
