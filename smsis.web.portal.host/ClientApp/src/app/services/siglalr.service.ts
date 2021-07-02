import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder, HubConnectionState } from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class SiglalrService {

    private connector : HubConnection = new HubConnectionBuilder()
    .withUrl("http://localhost:5010/siglalr")
    .build();

    private _user : string = "Pablo";

    constructor() {
    }

    public run() : void {
        this.connector.on("onMessage", (message) => console.log("Message from server: " + message));
        this.connector.on("onMessageU", (user, message) => 
            console.log("Message from server:: User: " + user + " Msg: " + message));

        this.connector
        .start()
        .then(() => console.log("Connection to server\n"))
        .catch(err => console.error("Error connection: " + err));
    }

    public sendMessage() : void {
        this.connector.send("SendMessage", "Helo Mundo")
        .catch(err => console.error("Error sending: " + err));
    }

    public sendMessageAny(method : string, user : string, message : string) : void {
        this.connector.invoke(method, user, message)
        .catch(err => console.error("Error sending: " + err));
    }

    public isConnected() : boolean {
        return this.connector.state === HubConnectionState.Connected;
    }
}
