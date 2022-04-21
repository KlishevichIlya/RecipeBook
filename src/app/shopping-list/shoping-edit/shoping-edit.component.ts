import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit, OnDestroy {

  editSlForm! : FormGroup;
  subscription!: Subscription;
  editMode = false;
  editedItemIndex!: number;
  editedItem!: Ingredient;

  constructor(private shopListService: ShoppingListService) { }


  ngOnInit(): void {
    this.editSlForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, this.validateNumberOfAmount])
    });
    this.subscription = this.shopListService.startedEditing
      .subscribe((index) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shopListService.getIngredient(index);
          this.editSlForm.setValue({
            'name': this.editedItem.name,
            'amount': this.editedItem.amount
          })
      })
  }

  validateNumberOfAmount(control: FormControl): {[key: string]: boolean} | null {
    if(+control.value < 0){
      return {'isAmountForbidden': true};
    }
    return null;
  }

  onAddIngredient(){
    const ingName = this.editSlForm?.get('name')?.value;
    const ingCount = +this.editSlForm?.get('amount')?.value;
    if(this.editMode){
      this.shopListService.updateIngredient(this.editedItemIndex, new Ingredient(ingName, ingCount));
    } else {
       this.shopListService.addIngredient(new Ingredient(ingName, ingCount));
    }
    this.editMode = false;
    this.editSlForm.reset();
  }

  onDelete(){
    this.shopListService.deleteIngredient(this.editedItemIndex);
    this.onReset();
  }

  onReset(){
    this.editSlForm.reset();
    this.editMode=false;
  }

  ngOnDestroy(): void {
        this.subscription.unsubscribe();
  }


}
