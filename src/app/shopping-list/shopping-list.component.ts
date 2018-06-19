import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredients } from '../shared/shared-models/ingredients.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as ShoppingListActions from './ngrx/shopping-list.actions';
import * as fromApp from '../store/app.reducer';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  public shoppingListState: Observable<{ingredients: Ingredients[]}>;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
  }

  public onEditItem = (id: number): void => this.store.dispatch(new ShoppingListActions.StartEdit(id));
}
