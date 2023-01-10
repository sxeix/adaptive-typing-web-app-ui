import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PocketbaseService } from '../pocketbase.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

    constructor(private pocketBaseService: PocketbaseService, private router: Router) { }

    
    logout(): void {
        this.pocketBaseService.signOut();
        this.router.navigate([''])
    }

}
