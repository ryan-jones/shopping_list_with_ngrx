import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public selectedFeature: string;

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAEt2eGLA-67As1rRJY1o2Pur3jI6XqZtE',
      authDomain: 'recipe-book-eead6.firebaseapp.com'
    });
    this.selectedFeature = 'recipe';
  }
  public onNavigate = (feature: string): string => this.selectedFeature = feature;
}
