import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredients } from '../shared/shared-models/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipeChanges = new Subject<Recipe[]>();
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
    ),
    new Recipe(
      'Chicken Masala',
      'A great Indian dish',
      'https://indianhealthyrecipes.com/wp-content/uploads/2017/05/chicken-masala.jpg',
      [
        new Ingredients('chicken', 1),
        new Ingredients('Masala paste', 1),
        new Ingredients('Basmati rice', 10)
      ]
    )
  ];
  constructor(private shopService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredients[]) {
    this.shopService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanges.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanges.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanges.next(this.recipes.slice());
  }
}
