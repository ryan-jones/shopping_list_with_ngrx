import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private token: string;

  constructor(private router: Router) {}

  public signupUser(email: string, password: string): void {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => console.log(error));
  }

  public loginUser(email: string, password: string): void {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        this.router.navigate(['/']);
        firebase
          .auth()
          .currentUser.getIdToken()
          .then((token: string) => (this.token = token));
      })
      .catch(error => console.log(error));
  }

  public logout(): void {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/']);
  }

  public getToken(): string {
    firebase.auth().currentUser.getToken()
      .then((token: string) => this.token = token);
    return this.token;
  }

  public isAuthenticated = () => this.token !== null;
}
