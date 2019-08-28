import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();
    // private recipes: Recipe[] = [
    //     new Recipe("A test recipe","Simply test",
    //             "https://upload.wikimedia.org/wikipedia/commons/a/a0/Recipe_for_the_Empire_Christmas_Pudding.jpg",
    //             [new Ingredient('Meat',1), new Ingredient('French fries',20)]),
    //     new Recipe("Another test recipe","Simply test",
    //             "https://upload.wikimedia.org/wikipedia/commons/a/a0/Recipe_for_the_Empire_Christmas_Pudding.jpg",
    //             [ new Ingredient('Buns',2),new Ingredient('Meat',1)])
    //   ];
    private recipes : Recipe[] = [];

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(id: number){
        return this.recipes[id];
      }

      addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }
      updateRecipe(index:number,newRecipe:Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());

      }
      constructor(private slService : ShoppingListService){}
      addIngredientsToShoppingList(ingredients : Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

      deleteRecipe(index : number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
      }

      setRecipes(recipes : Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }
}