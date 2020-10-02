import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController, ActionSheetController, LoadingController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  splash = true;
  animatione = false;

  constructor(
    public actionSheetController: ActionSheetController,
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
  ) { }

  validationsForm: FormGroup;
  errorMessage = '';


  validationMessages = {
    email: [
      { type: 'required', message: 'Debe ingresar email.' },
      { type: 'pattern', message: 'Ingresar un email valido.' }
    ],
    password: [
      { type: 'required', message: 'Debe ingresar contraseña.' },
      { type: 'minlength', message: 'Mínimo 6 caracteres' }
    ]
  };


  slideOptsOne = {
    initialSlide: 3,
    slidesPerView: 1,
    speed: 2000, //0.3s transition
      autoplay: true,
      loop: true,

   };

  ngOnInit() {

    this.validationsForm = this.formBuilder.group({
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


  loginUser(value) {
    this.loadingCtrl
      .create({ keyboardClose: true, message: 'Ingresando...' })
      .then(loadingEl => {
        loadingEl.present();
        this.authService.loginUser(value)
        .then(res => {
          console.log(res);
          this.errorMessage = '';
          this.loadingCtrl.dismiss();
          this.navCtrl.navigateForward('/gallery');
        }, err => {
          this.errorMessage = err.message;
        });
      });
  }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Elege un perfil para iniciar sesión:',
      cssClass: 'action-sheets',
      buttons: [{
        text: 'Administrador',
        role: 'destructive',
        icon: 'build',
        handler: () => {
          this.validationsForm.patchValue({ email: 'admin@test.com' });
          this.validationsForm.patchValue({ password: 'adminpass' });
        }
      }, {
        text: 'Usuario',
        icon: 'person',
        handler: () => {
          this.validationsForm.patchValue({ email: 'user@test.com' });
          this.validationsForm.patchValue({ password: 'userpass' });
        }
      }, {
        text: 'Anónimo',
        icon: 'person',
        handler: () => {
          this.validationsForm.patchValue({ email: 'anonymous@test.com' });
          this.validationsForm.patchValue({ password: 'anonymouspass' });
        }
      }, {
        text: 'Tester',
        icon: 'person',
        handler: () => {
          this.validationsForm.patchValue({ email: 'tester@test.com' });
          this.validationsForm.patchValue({ password: 'testerpass' });
        }
      }, {
        text: 'Invitado',
        icon: 'person',
        handler: () => {
          this.validationsForm.patchValue({ email: 'guest@test.com' });
          this.validationsForm.patchValue({ password: 'guestpass' });
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();
  }


  goToRegisterPage() {
    this.navCtrl.navigateForward('/register');
  }


  ionViewDidEnter(){
    setTimeout(() => this.animatione = true, 100);    
    setTimeout(() => this.splash = false, 5000);
  }

}
