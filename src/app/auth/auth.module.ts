import { NgModule } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutes } from "./auth-routes";
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [AuthRoutes, SharedModule]
})
export class AuthModule {}
