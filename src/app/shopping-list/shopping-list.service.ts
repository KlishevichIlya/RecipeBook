import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService{

  ingrredientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomato", 2)
  ];

  getIngredients(): Ingredient[]{
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient){
    this.ingredients.push(newIngredient);
    this.ingrredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(newIngredients: Ingredient[]){
   /* for(let ingredient of newIngredients){
      this.addIngredient(ingredient);
    }*/
    this.ingredients.push(...newIngredients);
    this.ingrredientChanged.emit(this.ingredients.slice());
  }
}
