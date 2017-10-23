import {NgModule} from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { InitialComponent } from './initial/initial.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';

const recipesRoutes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    children: [
      { path: '', component: InitialComponent },
      { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },

      { path: ':id', component: RecipesDetailsComponent },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
]
@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule]
})

export class RecipesRoutingModule {}