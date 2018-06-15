import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/shared-models/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
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
    )
  ];
  constructor(private shopService: ShoppingListService) {}

  public getRecipes = (): Recipe[] => this.recipes.slice();

  public getRecipe = (index: number): Recipe => this.recipes[index];

  public addIngredientsToShoppingList = (ingredients: Ingredients[]): void => this.shopService.addIngredients(ingredients);

}
