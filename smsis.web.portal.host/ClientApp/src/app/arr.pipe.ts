import { Input, Pipe, PipeTransform } from '@angular/core';
import { Item } from "./models/item.model";

@Pipe({
  name: 'arr'
})
export class ArrPipe implements PipeTransform {

  public arr: Input[];

  transform(value: any, args: any[] = null): any {
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

}
