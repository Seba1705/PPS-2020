import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
    selector: 'app-user',
    templateUrl: './user.page.html',
    styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

    constructor(private router: Router, private auth: AuthService, private toast: ToastController) { }

    ngOnInit() {
    }

    logout(){
        console.log('logout')
        this.auth.auth.signOut();
        this.router.navigateByUrl('/login');
        this.presentToast('Hasta la próxima!!!')
    }

    async presentToast(message: string) {
        const toast = await this.toast.create({
            message,
            duration: 2000,
            position: "top"
        });
        toast.present();
    }
}

