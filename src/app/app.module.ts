import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared.module';


//components
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/header/header.component';
import { HomeComponent } from './home/home.component';


//services
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';

//ngrx
import { Store, StoreModule } from '@ngrx/store';
import { shoppingListReducer } from './shopping-list/ngrx/shopping-list.reducers';
import { reducers } from './store/app.reducer';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpModule,
    StoreModule.forRoot(reducers) //found in app.reducer
  ],
  providers: [
    RecipeService,
    DataStorageService,
    AuthService,
    AuthGuard,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
