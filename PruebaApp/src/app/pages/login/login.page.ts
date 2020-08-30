import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.class';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    user = new User();

    constructor(private router: Router, private auth: AuthService) { }

    ngOnInit() {
    }

    async login() {
        const user = await this.auth.onLogin(this.user);

        if (user)
            this.router.navigateByUrl('/user');
    }
}
