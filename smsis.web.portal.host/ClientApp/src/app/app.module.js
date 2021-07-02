var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
;
import { ArrPipe } from './arr.pipe';
import { NotifyComponent } from './notify/notify.component';
import { ToastComponent } from './notify/toast/toast.component';
// import { AuthConfigModule } from './auth/auth-config.module.ts';
import { RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AdministrationComponent } from './administration/administration.component';
const routes = [
    { path: "", component: DataBaseComponent },
    { path: "admin", component: AdministrationComponent },
    { path: "**", component: DataBaseComponent },
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
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
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map