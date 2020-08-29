import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { User } from '../shared/user.class';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    isLogged:any = false;

    constructor(public auth: AngularFireAuth) { 
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
           console.error('Error on Register', error);
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
           console.error('Error on login', error);     
        }
    }

    //LogOut
}
