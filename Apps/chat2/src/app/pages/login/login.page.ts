import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ActionSheetController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  correo: string;
  clave: string;
  cargando = false;

  validations_form: FormGroup;
  errorMessage: string = '';
  splash = true;
  fade = false;
 

  constructor(
    private alertControler: AlertController,
    
    private navCtrl: NavController,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router:Router,
    public actionSheetController: ActionSheetController,
    private loadingCtrl : LoadingController
    ) { }

  ngOnInit( ) {
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });
  }

  validation_messages = {
    'email': [
      { type: 'required', message: 'El email es un campo requerido.' },
      { type: 'pattern', message: 'Por favor ingrese un email válido.' }
    ],
    'password': [
      { type: 'required', message: 'La contraseña es un campo requerido.' },
      { type: 'minlength', message: 'La contraseña debe tener al menos 6 caracteres.' }
    ]
  };


  loginUser(value) {
    this.loadingCtrl
    .create({ keyboardClose: true, message: 'Iniciando sesión...' })
    .then(loadingEl => {
      loadingEl.present();
      this.authService.SignIn(value.email, value.password)
      .then(res => {
        console.log(res);
        this.authService.saveInStorage(res.user)
        .then(message => {
          console.log(message);
          this.errorMessage = '';
          this.loadingCtrl.dismiss();
          this.navCtrl.navigateForward('/grupo');
        });
      }, err => {
        this.errorMessage =  this.authService.printErrorByCode (err.code);
        // this.creoToast(false, this.errorMessage);
        this.loadingCtrl.dismiss();
        console.log(err.message);
      });
    });
  }
 
  goToRegisterPage(){
    this.navCtrl.navigateForward('/registration');
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'users',
      buttons: [{
        text: 'Admin',
        role: 'destructive',
        icon: 'person-add-outline',
        handler: () => {
          this.validations_form.controls['email'].setValue("admin@test.com");
          this.validations_form.controls['password'].setValue("adminpass");
        }
      }, {
        text: 'Usuario',
        icon: 'person-outline',
        handler: () => {
          this.validations_form.controls['email'].setValue("user@test.com");
          this.validations_form.controls['password'].setValue("userpass");
        }
      }, {
        text: 'Anónimo',
        icon: 'person-outline',
        handler: () => {
          this.validations_form.controls['email'].setValue("anonymous@test.com");
          this.validations_form.controls['password'].setValue("anonymouspass");
        }
      }]
    });
    await actionSheet.present();
  }

}