import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";
import {Subject} from "rxjs";

export class ShoppingListService{

  ingrredientChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomato", 2)
  ];

  getIngredients(): Ingredient[]{
    return this.ingredients.slice();
  }

  getIngredient(index: number){
    return this.ingredients[index];
  }

  addIngredient(newIngredient: Ingredient){
    this.ingredients.push(newIngredient);
    this.ingrredientChanged.next(this.ingredients.slice());
  }

  addIngredients(newIngredients: Ingredient[]){
   /* for(let ingredient of newIngredients){
      this.addIngredient(ingredient);
    }*/
    this.ingredients.push(...newIngredients);
    this.ingrredientChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
    this.ingrredientChanged.next(this.ingredients);
  }

  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingrredientChanged.next(this.ingredients.slice());
  }


}
