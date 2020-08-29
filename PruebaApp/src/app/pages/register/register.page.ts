import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.class';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    user = new User();

    constructor() { }

    ngOnInit() {
    }

}
