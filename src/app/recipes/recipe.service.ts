import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/shared-models/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Laksa',
      'A great Malaysian dish',
      'https://c1.staticflickr.com/6/5589/15026678549_bf25134555_b.jpg',
      [
        new Ingredients('chicken', 1),
        new Ingredients('laksa paste', 1),
        new Ingredients('rice noodles', 10)
      ]
    )
  ];
  constructor(private shopService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredients[]) {
    this.shopService.addIngredients(ingredients);
  }
}
