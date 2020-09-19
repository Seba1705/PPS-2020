import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../shared/user.class';
import { AlertController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    isLogged:any = false;

    constructor(public auth: AngularFireAuth, 
                private alertController: AlertController) { 

        auth.authState.subscribe( user => this.isLogged = user)
    }

    //Register
    async onRegister(user: User) {
        try {
            return await this.auth.createUserWithEmailAndPassword(
                user.email, 
                user.password
            );
        }
        catch (error) {
            this.presentAlert(error.message, 'Error al registrarse');   
        }
    }

    //LogIn
    async onLogin(user: User) {
        try {
            return await this.auth.signInWithEmailAndPassword(
                user.email, 
                user.password
            );
        }
        catch (error) {
           this.presentAlert(error.message, 'Error al iniciar sesión');   
        }
    }

    async presentAlert(message: string, header: string) {
        const alert = await this.alertController.create({
            header,   
            message,
            buttons: ['OK']
        });
    
        await alert.present();
    }
}
