import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';


//services
import { RecipeService } from './../recipes/recipe.service';
import { DataStorageService } from './../shared/data-storage.service';
import { AuthService } from './../auth/auth.service';
import { AuthGuard } from './../auth/auth-guard.service';
@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [SharedModule, AppRoutingModule],
  exports: [AppRoutingModule, HeaderComponent],
  providers: [
    RecipeService,
    DataStorageService,
    AuthService,
    AuthGuard,
    SharedModule
  ],
})
export class CoreModule {}