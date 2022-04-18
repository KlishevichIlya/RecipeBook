import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {

  @ViewChild('nameIngredient') nameIngredient: ElementRef | undefined;
  @ViewChild('countIngredients') countIngredients: ElementRef | undefined;
  //@Output() newIngredient = new EventEmitter<Ingredient>();


  constructor(private shopListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    const ingName = this.nameIngredient?.nativeElement.value;
    const ingCount = this.countIngredients?.nativeElement.value;
    this.shopListService.addIngredient(new Ingredient(ingName, ingCount));
  }

}
