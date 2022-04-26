import {Recepie} from "../shared/recepie.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";
@Injectable()
export class RecepieService{

  public recepiesList = new Subject<Recepie[]>();

  constructor(private slService: ShoppingListService) {}

  /*private recepies: Recepie[] = [
    new Recepie(
      0,
      "Pasta",
      "This is a simply pasta",
      "https://images.immediate.co.uk/production/volatile/sites/30/2013/05/One-pan-spaghetti-f2aca14.jpg?quality=90&webp=true&resize=300,272",
      [
        new Ingredient('Pasta', 2),
        new Ingredient('Meat', 3)
      ]),
    new Recepie(
      1,
      "Salad",
      "This is a simply salad",
      "https://robbreport.com/wp-content/uploads/2019/12/sorrel-cappelletti-1.jpg?resize=300,272",
      [
        new Ingredient('Eggs', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Salad', 2),
      ]),
  ];*/
  private recepies: Recepie[] = [];

  setRecepies(recepies: Recepie[]): void{
    this.recepies = recepies;
    this.recepiesList.next(this.recepies.slice());
  }

  getRecepies(){
    return this.recepies.slice();
  }

  getRecepieById(id: number): Recepie{
    return this.recepies.find((recepie) => {
       return recepie.id === id;
    })!;
  }

  addIngredinetsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

  updateRecepie(index: number, newRecepie: Recepie){
    this.recepies[index] = newRecepie;
    this.recepiesList.next(this.recepies.slice());
  }

  deleteRecepie(index: number){
    const targetRecepie = this.recepies.find(x => x.id === index);
    this.recepies.splice(this.recepies.findIndex(item => item.id === targetRecepie?.id), 1);
    this.recepiesList.next(this.recepies);
  }

  createNewRecepie(newRecepie: Recepie){
    this.recepies.push(newRecepie);
    this.recepiesList.next(this.recepies.slice());
  }

}
