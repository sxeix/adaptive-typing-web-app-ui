import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PocketbaseService } from '../pocketbase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    constructor(private pocketBaseService: PocketbaseService, private router: Router) { }

    ngOnInit(): void {
    }

    logout(): void {
        this.pocketBaseService.signOut();
        this.router.navigate([''])
    }

}
