import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.class';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    user = new User();

    constructor(private router: Router, private auth: AuthService, private toast: ToastController) { }

    ngOnInit() {
    }

    async presentToast(message: string) {
        const toast = await this.toast.create({
            message,
            duration: 2000
        });
        toast.present();
    }

    async register() {
        const user = await this.auth.onRegister(this.user);

        if (user){
            this.router.navigateByUrl('/login');
            this.presentToast('Usuario Registrado Correctamente!')
        } 
    }

}
