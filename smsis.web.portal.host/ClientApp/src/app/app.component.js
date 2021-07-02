var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { HttpService } from "./services/http.service";
import { PermissionService } from "./services/permission.service";
let AppComponent = class AppComponent {
    constructor(_httpService, title, signalRService, permissionService, accountService) {
        this._httpService = _httpService;
        this.title = title;
        this.signalRService = signalRService;
        this.permissionService = permissionService;
        this.accountService = accountService;
        this.isAuth = false;
    }
    ngOnInit() {
        window.onbeforeunload = function () {
            window.localStorage.clear();
        };
        this.title.setTitle("БД vIMS");
        if (this.signalRService.isConnected()) {
            this.signalRService.sendMessage();
            this.signalRService.sendMessageAny("SendMessageUser", "Pablo", "Hello");
        }
    }
    onAuth(event) {
        this.isAuth = event;
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app',
        templateUrl: './app.component.html',
        providers: [HttpService, PermissionService]
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map