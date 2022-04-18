import {Component, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Recepie} from "../../shared/recepie.model";
import {RecepieService} from "../recepie.service";
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {

  @Input() recepieForDetail: Recepie | undefined;

  constructor(private recepieService: RecepieService) { }

  ngOnInit(): void {
  }

  onShoppingList(){
    this.recepieService.addIngredinetsToShoppingList(this.recepieForDetail!.ingredients)
  }



}
