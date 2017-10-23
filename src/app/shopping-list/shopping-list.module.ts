

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { NgModule } from '@angular/core';
import { ShoppingListRoutingModule } from './shopping-routes';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common/';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingListEditComponent],
  imports: [
    ShoppingListRoutingModule, CommonModule, FormsModule
  ]
})
export class ShoppingListModule {}