import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredients } from '../../shared/shared-models/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shopListForm: NgForm;
  subscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;
  editedItem: Ingredients;

  constructor(private shopService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shopService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;

        this.editedItem = this.shopService.getIngredient(index);
        this.shopListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmitItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredients(value.name, value.amount);
    this.editMode
      ? this.shopService.updateIngredient(this.editedItemIndex, newIngredient)
      : this.shopService.addIngredient(newIngredient);
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.shopListForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shopService.deleteIngredient(this.editedItemIndex);
    this.onClear()
  }
}
