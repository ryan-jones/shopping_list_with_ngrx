import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredients } from '../shared/shared-models/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
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
      'https://www.google.es/imgres?imgurl=https%3A%2F%2Findianhealthyrecipes.com%2Fwp-content%2Fuploads%2F2017%2F05%2Fchicken-masala.jpg&imgrefurl=https%3A%2F%2Findianhealthyrecipes.com%2Fchicken-masala-recipe%2F&docid=FzerfRZpOOOTwM&tbnid=3-Acafny7HTXDM%3A&vet=10ahUKEwj32-q5lcXWAhWGExoKHeCBDmoQMwiLAigAMAA..i&w=670&h=447&bih=776&biw=1440&q=chicken%20masala&ved=0ahUKEwj32-q5lcXWAhWGExoKHeCBDmoQMwiLAigAMAA&iact=mrc&uact=8',
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
}
