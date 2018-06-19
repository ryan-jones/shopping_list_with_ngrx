import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredients } from '../shared/shared-models/ingredients.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipeChanges = new Subject<Recipe[]>();
  public recipeSelected = new EventEmitter<Recipe>();
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
  constructor() {}

  public setRecipes(recipes: Recipe[]): void {
    this.recipes = recipes;
    this.recipeChanges.next(this.recipes.slice());
  }

  public getRecipes = (): Recipe[] => this.recipes.slice();

  public getRecipe = (index: number): Recipe => this.recipes[index];

  // public addIngredientsToShoppingList = (ingredients: Ingredients[]): void => this.shopService.addIngredients(ingredients);

  public addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipeChanges.next(this.recipes.slice());
  }

  public updateRecipe(index: number, newRecipe: Recipe): void {
    this.recipes[index] = newRecipe;
    this.recipeChanges.next(this.recipes.slice());
  }

  public deleteRecipe(index: number): void {
    this.recipes.splice(index, 1);
    this.recipeChanges.next(this.recipes.slice());
  }
}
