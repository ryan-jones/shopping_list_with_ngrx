import { Ingredients } from '../shared/shared-models/ingredients.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredients[]>();
  private ingredients: Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('Mangos', 6)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

// ... syntax takes values in the array ingredients and returns them as a list for this.ingredients to push incrementally
  addIngredients(ingredients: Ingredients[]) {
      this.ingredients.push(...ingredients)
      this.ingredientsChanged.next(this.ingredients.slice());
  }
}
