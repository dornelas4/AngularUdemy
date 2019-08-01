import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe("A test recipe","Simply test",
                "https://upload.wikimedia.org/wikipedia/commons/a/a0/Recipe_for_the_Empire_Christmas_Pudding.jpg",
                [new Ingredient('Meat',1), new Ingredient('French fries',20)]),
        new Recipe("Another test recipe","Simply test",
                "https://upload.wikimedia.org/wikipedia/commons/a/a0/Recipe_for_the_Empire_Christmas_Pudding.jpg",
                [ new Ingredient('Buns',2),new Ingredient('Meat',1)])
      ];

      getRecipes(){
          return this.recipes.slice();
      }

      constructor(private slService : ShoppingListService){}
      addIngredientsToShoppingList(ingredients : Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}