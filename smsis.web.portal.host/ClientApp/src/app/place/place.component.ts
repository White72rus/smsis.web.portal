import { Component, Input, OnInit } from '@angular/core';
import { Ims } from "../types";

@Component({
  selector: 'place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {

  @Input() in;
  @Input() index;
  @Input() dataBase;
  
  constructor() { }

  ngOnInit(): void {

  }

}
