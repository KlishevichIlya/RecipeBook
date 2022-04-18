import {Recepie} from "../shared/recepie.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
@Injectable()
export class RecepieService{

  constructor(private slService: ShoppingListService) {
  }

  public selectedRecepie = new EventEmitter<Recepie>();

  private recepies: Recepie[] = [
    new Recepie(
      "A Test Recepie",
      "This is a simply test",
      "https://images.immediate.co.uk/production/volatile/sites/30/2013/05/One-pan-spaghetti-f2aca14.jpg?quality=90&webp=true&resize=300,272",
      [
        new Ingredient('Banana', 2),
        new Ingredient('Meat', 2)
      ]),

  ];

  getRecepies(){
    return this.recepies.slice();
  }

  addIngredinetsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }



}
