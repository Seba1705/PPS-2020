import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/services/mensajes.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { User } from 'firebase';
import { Plugins } from '@capacitor/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.page.html',
  styleUrls: ['./grupo.page.scss'],
})
export class GrupoPage implements OnInit {

  usuarioActual:any;

  click= new Audio();
  constructor( 
    private mensajesService: MensajesService, 
    private router:Router, 
    private navCtrl: NavController,    
    private authService: AuthService
    ) { 
  }

  ngOnInit() {

    Plugins.Storage.get({ key: 'user-bd' }).then(
      (userData) => {
        this.usuarioActual = JSON.parse(userData.value);
        console.log (this.usuarioActual.name);
      }
      );
  }

  seleccionGrupo( grupoSelected : string ){

    if( grupoSelected === 'PPS-4A' ){
      this.mensajesService.setearGrupo('PPS-4A');
    }else{
      this.mensajesService.setearGrupo('PPS-4B');
    }
    this.navCtrl.navigateForward(['home']);
  } 

  logout(){
    this.authService.SignOut()
    .then(res => {
      console.log(res);
      this.navCtrl.navigateBack('');
    })
    .catch(error => {
      console.log(error);
    })
  }

}
