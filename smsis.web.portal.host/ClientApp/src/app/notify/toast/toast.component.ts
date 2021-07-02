import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

    @Input() items;

    constructor() { }

    ngOnInit(): void {
        console.log(this.items);
    }
}
