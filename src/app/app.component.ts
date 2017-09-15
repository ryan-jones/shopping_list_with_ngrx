import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedFeature: string;

  ngOnInit() {
    this.selectedFeature = 'recipe';
  }
  onNavigate(feature: string) {
    this.selectedFeature = feature;
  }
}
