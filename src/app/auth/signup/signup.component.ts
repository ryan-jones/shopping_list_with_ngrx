import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private authService: AuthService) {}

  public onSignup(form: NgForm): void {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);
  }
}
