var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { Notify } from '../models/notify.model';
let NotifyComponent = class NotifyComponent {
    constructor() {
        this.Object = Object;
        this.itemsList = {};
        this._show = false;
    }
    ngOnInit() {
        // console.log(this.itemsList);
        console.log("ngOnInit: " + this._show);
    }
    onEvent() {
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
};
NotifyComponent = __decorate([
    Component({
        selector: 'notify',
        templateUrl: './notify.component.html',
        styleUrls: ['./notify.component.scss']
    })
], NotifyComponent);
export { NotifyComponent };
//# sourceMappingURL=notify.component.js.map