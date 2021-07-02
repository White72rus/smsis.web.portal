import { Component, Injectable, OnInit } from '@angular/core';
import { Notify } from '../models/notify.model';

@Component({
    selector: 'notify',
    templateUrl: './notify.component.html',
    styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit {

    Object = Object;

    public itemsList = {};
    public _show : boolean = false;

    private notify;
    

    constructor() { }

    ngOnInit(): void {
        
        // console.log(this.itemsList);
        console.log("ngOnInit: " + this._show);
    }

    public onEvent() : void {
        this.notify = new Notify();
        this.notify.type = "alarm";
        this.notify.text = "Бяда";
        this.notify.autoComplete = true;
        this.notify.duration = 5;
        this.itemsList[0] = this.notify;
        this._show = !this._show;
        console.log("On Event: " + this._show);
        console.log(this.itemsList);
    }
}
