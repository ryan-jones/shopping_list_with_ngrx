import { Component, OnInit } from '@angular/core'
import { NgForm } from "@angular/forms";
import { AuthService } from '../auth.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}
  ngOnInit(){

  }

  onLogin(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.loginUser(email, password)
  }
}