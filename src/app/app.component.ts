import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public selectedFeature: string;

  ngOnInit() {
    this.selectedFeature = 'recipe';
  }
  public onNavigate = (feature: string): string => this.selectedFeature = feature;
}
