import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/add/operator/map'

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put(
      'https://recipe-book-eead6.firebaseio.com/recipes.json',
      this.recipeService.getRecipes()
    );
  }

  getRecipes() {
    return this.http
      .get('https://recipe-book-eead6.firebaseio.com/recipes.json')
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
