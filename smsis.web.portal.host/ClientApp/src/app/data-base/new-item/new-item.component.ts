import { Component, Input, OnInit } from '@angular/core';
import { Help } from 'src/app/Infrastructure/Help';
import { Ims } from 'src/app/types';
import { ImsData } from '../ImsData';
import { MssData } from '../MssData';

@Component({
    selector: 'new-item',
    templateUrl: './new-item.component.html',
    styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {

    // @Input() name;
    @Input() value;
    @Input() itemObj: any;
    @Input() table;

    public ims : Ims;
    public valueInput : string;
    public name : string;
    public star : string = "";
    public required : boolean = false;
    private itemDescription : any;

    constructor() {}

    ngOnInit() {
        if (this.table) {
            this.itemDescription = new ImsData().getData();
        } else { this.itemDescription = new MssData().value; }
        
        this.name = this.itemDescription[this.value];

        const array = ["Filial", "Region", "District", "City", "Addres", "NumbersRange", "Capacity",
        "Technology", "Protocol", "CpeType", "ObjType", "Hostname", "IpVoice", "IpControl", "Comment",
        ];

        if (Help.contains(this.value, array)){
            this.star = "*";
        }
            

        // console.log(`Name: ${this.name}, Value: ${this.value}`);
    }

    public onChange() : void {
        this.itemObj[this.value] = this.valueInput;
    }

}
