import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Chicken Laksa', 'A great Malaysian dish', 'https://c1.staticflickr.com/6/5589/15026678549_bf25134555_b.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
