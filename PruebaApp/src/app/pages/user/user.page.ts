import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.page.html',
    styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

    constructor(private router: Router, private auth: AuthService) { }

    ngOnInit() {
    }

    logout(){
        console.log('logout')
        this.auth.auth.signOut();
        this.router.navigateByUrl('/login');
    }
}
