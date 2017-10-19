import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredients } from '../shared/shared-models/ingredients.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromShoppingList from './ngrx/shopping-list.reducers'
import * as ShoppingListActions from './ngrx/shopping-list.actions'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ingredients: Ingredients[]}>;

  constructor(
    private store: Store<fromShoppingList.AppState>
  ) {}

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
  }

  onEditItem(id: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(id))
  }
}
