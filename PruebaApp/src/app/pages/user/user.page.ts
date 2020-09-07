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

    darkMode = true;

    constructor(private router: Router, 
                private auth: AuthService, 
                private toast: ToastController) {
                
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        this.darkMode = prefersDark.matches;
    }

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

    cambiarModo() {
        this.darkMode = !this.darkMode;
        document.body.classList.toggle('dark');
    }
}

