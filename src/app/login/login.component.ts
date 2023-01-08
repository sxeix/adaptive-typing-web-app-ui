import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PocketbaseService } from '../pocketbase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    hide = true;
    username = "";
    password = "";

    constructor(private pocketBaseService: PocketbaseService, private router: Router, private _snackBar: MatSnackBar) { }

    ngOnInit(): void {
    }


    login() {
        this.pocketBaseService.signIn(this.username, this.password).then(
            response => {
                if (this.pocketBaseService.isSignedIn()) {
                    this.router.navigate(['home'])
                }
            } 
        ).catch((exception) => {
            this._snackBar.open("Incorrect credentials or account does not exist.", "Close", {
                duration: 3000
              });
        })
    }

    createAccountPage() {
        this.router.navigate(['createAccount']);
    }

    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action);
    }

}
