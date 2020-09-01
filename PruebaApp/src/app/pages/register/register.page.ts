import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.class';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    user = new User();
    loading: any;


    constructor(private router: Router, private auth: AuthService, private toast: ToastController, private loadingCtrl: LoadingController) { }

    ngOnInit() {
        
    }

    async presentToast(message: string) {
        const toast = await this.toast.create({
            message,
            duration: 2000,
            position: "top"
        });
        toast.present();
    }

    async register() {
        this.presentLoading('Cargando...');
        const user = await this.auth.onRegister(this.user);

        if (user){
            this.router.navigateByUrl('/login');
            this.presentToast('Usuario Registrado Correctamente!')
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
