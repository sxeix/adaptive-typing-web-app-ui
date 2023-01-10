import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PocketbaseService } from '../pocketbase.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {

    hide = true;
    confirmHide = true;
    username = "";
    password = "";
    confirmPassword = "";

    constructor(private pocketBaseService: PocketbaseService, private router: Router, private _snackBar: MatSnackBar) { }

    ngOnInit(): void {
    }

    backToLogin() {
        this.router.navigate(['']);
    }


    createAccount() {
        if (this.password !== this.confirmPassword) {
            this._snackBar.open("Passwords do not match", "Close", {
                duration: 3000
            });
            return;
        } else if (this.password.length < 8) {
            this._snackBar.open("Passwords must be more than 8 characters", "Close", {
                duration: 3000
            });
            return;
        }
        this.pocketBaseService.createUser(this.username, this.password, this.confirmPassword).then(
            response => {
                this.router.navigate([''])
            } 
        ).catch((exception) => {
            this._snackBar.open("Error creating account.", "Close", {
                duration: 3000
            });
        })
    }
}
