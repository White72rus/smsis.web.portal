var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
import { Item } from "./models/item.model";
let ArrPipe = class ArrPipe {
    transform(value, args = null) {
        let arr = [];
        for (const key in value) {
            if (Object.prototype.hasOwnProperty.call(value, key)) {
                const element = value[key];
                let item = new Item();
                item.name = key;
                item.value = element;
                arr.push(item);
            }
        }
        // item.name = Object.keys(value);
        // item.value = Object.keys(value).map(key => value[key]).toString();
        return arr;
    }
};
ArrPipe = __decorate([
    Pipe({
        name: 'arr'
    })
], ArrPipe);
export { ArrPipe };
//# sourceMappingURL=arr.pipe.js.map