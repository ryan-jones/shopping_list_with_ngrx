


import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

const authRoutes: Routes = [
  { path: '/signup', component: SignupComponent },
  { path: '/login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule]
})

export class AuthRoutes {}