import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountService } from "../services/account.service";

@Component({
    selector: 'account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss'],
    providers: [AccountService],
})
export class AccountComponent implements OnInit {

    public login: string;
    public pass: string;
    public input: string;
    public passNotice: string;
    public loginNotice: string;
    public authSuccess : boolean = false;

    @Output() authEmitt : EventEmitter<boolean>;

    constructor(private account: AccountService) {
        this.authEmitt = new EventEmitter<boolean>();
    }

    ngOnInit() {
    }

    public onLogin(): void {
        this.account.login({ "Name": this.login, "Password": this.pass }).subscribe(d => {
            console.log("Response state: " + d.ok + " Code: " + d.status);
            if (d.ok) {
                this.input = "Successfully";
                this.authSuccess = true;
                this.authEmitt.emit(this.authSuccess);
                this.account.token = d.body["Token"];
            }
        })
    }

    public onChange(wors: string): void {

    }

}
