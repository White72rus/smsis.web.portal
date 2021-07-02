import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { DataBaseComponent } from './data-base/data-base.component';
import { PlaceComponent } from './place/place.component';
import { ItemComponent } from './data-base/item/item.component';
import { NewItemComponent } from './data-base/new-item/new-item.component';

import { HttpClientModule } from "@angular/common/http";
import { from } from 'rxjs';;
import { ArrPipe } from './arr.pipe';
import { NotifyComponent } from './notify/notify.component';
import { ToastComponent } from './notify/toast/toast.component';

// import { AuthConfigModule } from './auth/auth-config.module.ts';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AdministrationComponent } from './administration/administration.component';

const routes : Routes = [
    {path: "", component: DataBaseComponent},
    {path: "admin", component: AdministrationComponent},
    {path: "**", component: DataBaseComponent},
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes)],
    declarations: [		
        AppComponent,
        MenuComponent,
        HomeComponent,
        DataBaseComponent,
        PlaceComponent,
        ItemComponent,
        NewItemComponent,
        ArrPipe,
        NotifyComponent,
        ToastComponent,
        AccountComponent,
        AdministrationComponent
   ],
    bootstrap: [AppComponent]
})

export class AppModule { }