import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredients } from '../../shared/shared-models/ingredients.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../ngrx/shopping-list.actions';
import * as fromApp from '../../store/app.reducer';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shopListForm: NgForm;
  private subscription: Subscription;
  private editMode = false;
  private editedItem: Ingredients;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
   this.subscription = this.store.select('shoppingList').subscribe(
      data => {
        if (data.editedIngredientIndex > -1) {
          this.editedItem = data.editedIngredient;
          this.editMode = true;
          this.shopListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
        } else {
          this.editMode = false;
        }
      }
    );
  }

  ngOnDestroy() {
    this.store.dispatch(new ShoppingListActions.StopEdit());
    this.subscription.unsubscribe();
  }

  public onSubmitItem(form: NgForm): void {
    const value = form.value;
    const newIngredient = new Ingredients(value.name, value.amount);
    this.editMode
      ? this.store.dispatch(new ShoppingListActions.UpdateIngredient({ ingredient: newIngredient }))
      : this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    this.editMode = false;
    form.reset();
  }

  public onClear(): void {
    this.shopListForm.reset();
    this.editMode = false;
  }

  public onDelete(): void {
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    this.onClear();
  }
}
