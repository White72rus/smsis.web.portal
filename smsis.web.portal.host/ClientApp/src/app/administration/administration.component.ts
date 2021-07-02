import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClaimTypes } from '../ClaimTypes';
import { HttpService } from '../services/http.service';

@Component({
    selector: 'app-administration',
    templateUrl: './administration.component.html',
    styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

    public users : any;
    public userForm : boolean = false;
    public newUserForm : boolean = false;

    public loginNotice : string;
    public passNotice : string;
    public passConfirmNotice : string;

    // Fields
    public login : string;
    public pass : string;
    public passConfirm : string;

    public select : string;

    public read : boolean = true;
    public write : boolean = false;
    public edit : boolean = false;
    public delete : boolean = false;

    constructor(private httpService: HttpService) { }

    ngOnInit() {
        console.log("Admin component 'ngOnInit'");
        this.httpService.getUsers().subscribe(response => {
            this.users = this.parse(response.body);
            console.log(this.users);
        });
    }

    public onAdd() : void {
        this.newUserForm = !this.newUserForm;
    }

    public onDel() : void {

    }

    public onEdit(intex : number) : void {
        this.userForm = !this.userForm; 
    }

    public onNew() : void {
        this.newUserForm = !this.newUserForm;
    }

    public onSubmit() : void {
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
        },
        (err:HttpErrorResponse) => {
            // Error to do
        });

    }

    public onChange(arg: string) : void {

    }

    /**
     * Parse array from respons body.
     * @param obj Body from respons.
     * @returns New array.
     */
    private parse(obj : any) : any {
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
}
