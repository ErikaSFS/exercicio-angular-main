 import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
login() {
throw new Error('Method not implemented.');
}
nome: any;
senha: any;

  constructor(
    private router: Router,
  ){
    // TODO implementar autenticação
    router.navigate(["pessoas"])
  }
}
