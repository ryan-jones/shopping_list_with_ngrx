import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Laksa',
      'A great Malaysian dish',
      'https://c1.staticflickr.com/6/5589/15026678549_bf25134555_b.jpg'
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
