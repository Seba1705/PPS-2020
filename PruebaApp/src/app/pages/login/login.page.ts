import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.class';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    user = new User();
    loading: any;

    constructor(private router: Router, private auth: AuthService, private loadingCtrl: LoadingController) { }

    ngOnInit() {
    }

    async login() {
        this.presentLoading('Cargando...');
        const user = await this.auth.onLogin(this.user);
        
        if (user) {
            this.router.navigateByUrl('/user');
        }
        this.loading.dismiss();

    }

    async presentLoading(message: string) {
        this.loading = await this.loadingCtrl.create({
            message,
            spinner: "circles"
        });
        return this.loading.present();
    }
}

