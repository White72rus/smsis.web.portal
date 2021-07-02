var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { HubConnectionBuilder, HubConnectionState } from '@aspnet/signalr';
let SiglalrService = class SiglalrService {
    constructor() {
        this.connector = new HubConnectionBuilder()
            .withUrl("http://localhost:5010/siglalr")
            .build();
        this._user = "Pablo";
    }
    run() {
        this.connector.on("onMessage", (message) => console.log("Message from server: " + message));
        this.connector.on("onMessageU", (user, message) => console.log("Message from server:: User: " + user + " Msg: " + message));
        this.connector
            .start()
            .then(() => console.log("Connection to server\n"))
            .catch(err => console.error("Error connection: " + err));
    }
    sendMessage() {
        this.connector.send("SendMessage", "Helo Mundo")
            .catch(err => console.error("Error sending: " + err));
    }
    sendMessageAny(method, user, message) {
        this.connector.invoke(method, user, message)
            .catch(err => console.error("Error sending: " + err));
    }
    isConnected() {
        return this.connector.state === HubConnectionState.Connected;
    }
};
SiglalrService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SiglalrService);
export { SiglalrService };
//# sourceMappingURL=siglalr.service.js.map