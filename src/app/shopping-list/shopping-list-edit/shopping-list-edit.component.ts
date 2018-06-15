import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredients } from '../../shared/shared-models/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  constructor(private shopService: ShoppingListService) {}

  ngOnInit() {}

  public onAddItem(): void {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredients(ingredientName, ingredientAmount);
    this.shopService.addIngredient(newIngredient);
  }
}
