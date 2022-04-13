import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {

  @ViewChild('nameIngredient') nameIngredient: ElementRef | undefined;
  @ViewChild('countIngredients') countIngredients: ElementRef | undefined;
  @Output() newIngredient = new EventEmitter<Ingredient>();


  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    this.newIngredient.emit(new Ingredient(this.nameIngredient?.nativeElement.value,
      +this.countIngredients?.nativeElement.value));
  }

}
