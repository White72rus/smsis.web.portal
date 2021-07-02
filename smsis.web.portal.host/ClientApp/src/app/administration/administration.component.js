var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { ClaimTypes } from '../ClaimTypes';
let AdministrationComponent = class AdministrationComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.userForm = false;
        this.newUserForm = false;
        this.read = true;
        this.write = false;
        this.edit = false;
        this.delete = false;
    }
    ngOnInit() {
        console.log("Admin component 'ngOnInit'");
        this.httpService.getUsers().subscribe(response => {
            this.users = this.parse(response.body);
            console.log(this.users);
        });
    }
    onAdd() {
        this.newUserForm = !this.newUserForm;
    }
    onDel() {
    }
    onEdit(intex) {
        this.userForm = !this.userForm;
    }
    onNew() {
        this.newUserForm = !this.newUserForm;
    }
    onSubmit() {
        if (this.pass !== this.passConfirm) {
            return;
        }
        let data = {
            login: this.login,
            password: this.pass,
            role: this.select,
            read: this.read,
            write: this.write,
            edit: this.edit,
            delete: this.delete,
        };
        this.httpService.addUsers(data).subscribe((pesponse) => {
            // Ok to do
        }, (err) => {
            // Error to do
        });
    }
    onChange(arg) {
    }
    /**
     * Parse array from respons body.
     * @param obj Body from respons.
     * @returns New array.
     */
    parse(obj) {
        let array = [];
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                const element = obj[key];
                let box = {
                    Name: null,
                    Email: null,
                    Login: null,
                    Role: null,
                };
                box.Name = element.User.Name;
                box.Email = element.User.Email;
                box.Login = element.User.Login;
                for (const key in element.Claims) {
                    if (Object.prototype.hasOwnProperty.call(element.Claims, key)) {
                        const element2 = element.Claims[key];
                        if (element2.Type === ClaimTypes.Role) {
                            box.Role = element2.Value;
                        }
                    }
                }
                array.push(box);
            }
        }
        return array;
    }
};
AdministrationComponent = __decorate([
    Component({
        selector: 'app-administration',
        templateUrl: './administration.component.html',
        styleUrls: ['./administration.component.scss']
    })
], AdministrationComponent);
export { AdministrationComponent };
//# sourceMappingURL=administration.component.js.map