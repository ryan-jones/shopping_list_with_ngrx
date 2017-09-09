import { Ingredients } from '../shared/shared-models/ingredients.model';
import { Output, EventEmitter } from "@angular/core";

export class ShoppingListService {
    @Output() ingredientsChanged = new EventEmitter<Ingredients[]>();
  private ingredients: Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('Mangos', 6)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
