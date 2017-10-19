import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredients } from '../../shared/shared-models/ingredients.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../ngrx/shopping-list.actions';
import * as fromShoppingList from '../ngrx/shopping-list.reducers'
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shopListForm: NgForm;
  subscription: Subscription;
  editMode: boolean = false;
  editedItem: Ingredients;

  constructor(
    private store: Store<fromShoppingList.AppState>
  ) {}

  ngOnInit() {
   this.subscription = this.store.select('shoppingList').subscribe(
      data => {
        if (data.editedIngredientIndex > -1){
          this.editedItem = data.editedIngredient
          this.editMode = true;
          this.shopListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
        } else {
          this.editMode = false;
        }
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmitItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredients(value.name, value.amount);
    this.editMode
      ? this.store.dispatch(new ShoppingListActions.UpdateIngredient({ ingredient: newIngredient }))
      : this.store.dispatch(
          new ShoppingListActions.AddIngredient(newIngredient)
        );
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.shopListForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.store.dispatch(
      new ShoppingListActions.DeleteIngredient()
    );
    this.onClear();
  }
}
