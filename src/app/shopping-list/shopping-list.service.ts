import { Ingredients } from '../shared/shared-models/ingredients.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredients[]>();
  private ingredients: Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('Mangos', 6)
  ];

  public getIngredients = (): Ingredients[] => this.ingredients.slice();

  public addIngredient(ingredient: Ingredients): void {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit([...this.ingredients]);
  }

// ... syntax takes values in the array ingredients and returns them as a list for this.ingredients to push incrementally
  public addIngredients(ingredients: Ingredients[]): void {
      this.ingredients.push(...ingredients);
      this.ingredientsChanged.emit([...this.ingredients]);
  }
}
