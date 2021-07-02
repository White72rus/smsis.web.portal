var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Input } from '@angular/core';
let ToastComponent = class ToastComponent {
    constructor() { }
    ngOnInit() {
        console.log(this.items);
    }
};
__decorate([
    Input()
], ToastComponent.prototype, "items", void 0);
ToastComponent = __decorate([
    Component({
        selector: 'toast',
        templateUrl: './toast.component.html',
        styleUrls: ['./toast.component.scss']
    })
], ToastComponent);
export { ToastComponent };
//# sourceMappingURL=toast.component.js.map