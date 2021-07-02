import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpService } from "./services/http.service";
import { SiglalrService } from './services/siglalr.service';
import { PermissionService } from "./services/permission.service";
import { AccountService } from './services/account.service';
import { ClaimTypes } from './ClaimTypes';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    providers: [HttpService, PermissionService]
})
export class AppComponent implements OnInit {

    public isAuth : boolean = false;

    constructor(private _httpService: HttpService, public title: Title, 
                private signalRService : SiglalrService, 
                private permissionService : PermissionService, private accountService : AccountService){}

    ngOnInit(): void {
        window.onbeforeunload = function () {
            window.localStorage.clear();
        }

        this.title.setTitle("БД vIMS");

        if (this.signalRService.isConnected()){
            this.signalRService.sendMessage();
            this.signalRService.sendMessageAny("SendMessageUser", "Pablo", "Hello");
        }
    }
    
    public onAuth(event) : void {
        this.isAuth = event;
    }
}