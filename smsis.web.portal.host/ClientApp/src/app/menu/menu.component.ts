import { Component, inject, OnInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { AccountService } from '../services/account.service';
import { ClaimTypes } from '../ClaimTypes';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  // @inject(DOCUMENT) private _document: Document;
 

  public str: string;
  public isAdmin: boolean = false;
  public claims : any = this.accountService.claims;

  constructor(private accountService : AccountService) 
  {
  }

  ngOnInit(): void {
    this.str = new Document().URL;
    //console.log(this.str);
    if (this.claims[ClaimTypes.Role] == "Administrator")
        this.isAdmin = true;
  }
}
