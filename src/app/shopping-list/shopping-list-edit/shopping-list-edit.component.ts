import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../../shared/shared-models/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
 
  constructor(private shopService: ShoppingListService) {}

  ngOnInit() {}

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredients(value.name, value.amount);
    this.shopService.addIngredient(newIngredient);
  }
}
