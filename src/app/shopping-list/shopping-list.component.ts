import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/shared-models/ingredients.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('Mangos', 6)
  ];

  constructor() { }

  ngOnInit() {
  }

}
