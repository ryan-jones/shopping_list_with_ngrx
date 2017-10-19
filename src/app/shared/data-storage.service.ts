import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/add/operator/map'
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
   private recipeService: RecipeService,
   private authService: AuthService) {}

  storeRecipes() {
        const token = this.authService.getToken()

    return this.http.put(
      `https://recipe-book-eead6.firebaseio.com/recipes.json?auth=${token}`,
      this.recipeService.getRecipes()
    );
  }

  getRecipes() {
    const token = this.authService.getToken()
    return this.http
      .get(`https://recipe-book-eead6.firebaseio.com/recipes.json?auth=${token}`)
      .map((res: Response) => {
        const recipes: Recipe[] = res.json();
        recipes.forEach(recipe => {
          if (!recipe['ingredients']) recipe['ingredients'] = [];
        });
        return recipes
      })
      .subscribe(res => {
        this.recipeService.setRecipes(res);
      });
  }
}
