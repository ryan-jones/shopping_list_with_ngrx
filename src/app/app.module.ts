import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared.module';


//components
import { AppComponent } from './app.component';

//ngrx
import { Store, StoreModule } from '@ngrx/store';
import { shoppingListReducer } from './shopping-list/ngrx/shopping-list.reducers';
import { reducers } from './store/app.reducer';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpModule,
    AuthModule,
    CoreModule,
    StoreModule.forRoot(reducers) //found in app.reducer
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {}
