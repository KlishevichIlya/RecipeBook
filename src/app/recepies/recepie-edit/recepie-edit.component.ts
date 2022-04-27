import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecepieService} from "../recepie.service";
import {Ingredient} from "../../shared/ingredient.model";
import {Recepie} from "../../shared/recepie.model";

@Component({
  selector: 'app-recepie-edit',
  templateUrl: './recepie-edit.component.html',
  styleUrls: ['./recepie-edit.component.css']
})
export class RecepieEditComponent implements OnInit {

  public id: number | undefined;
  public editMode = false;
  public recepieForm: FormGroup;
  get ingredients(){
    return (this.recepieForm.get('ingredients') as FormArray).controls
  }

  constructor(private route: ActivatedRoute,
              private recepieService: RecepieService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      })
  }

  onAddIngredient(): void{
    (<FormArray>this.recepieForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null,
        [Validators.required, Validators.pattern(/^[1-9]+\d*$/)])
    }))
  }

  onSubmit(): void{
    let recepie = new Recepie(
         this.id ? this.id: Date.now() ,
       this.recepieForm.value['name'],
       this.recepieForm.value['description'],
       this.recepieForm.value['imageUrl'],
       this.recepieForm.value['ingredients'],
    )
    if(this.editMode){
      this.recepieService.updateRecepie(this.id!, recepie)
    } else {
      this.recepieService.createNewRecepie(recepie);
    }
    this.onCancel();
  }

  onCancel(): void{
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  public onDeleteIngredient(index: number): void{
    (<FormArray>this.recepieForm.get('recepies')).removeAt(index);
  }


  private initForm(){
    let recepieName = '';
    let recepieImagePath = '';
    let recepieDescription = '';
    let recepieIngredients = new FormArray([]);

    if(this.editMode){
      let recepie = this.recepieService.getRecepieById(this.id!);
      recepieName = recepie.name;
      recepieDescription = recepie.description;
      recepieImagePath = recepie.imagePath;
      if(recepie['ingredients']){
        for(let ingredient of recepie.ingredients){
          recepieIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount,
              [Validators.required, Validators.pattern(/^[1-9]+\d*$/)]),
            })
          );
        }
      }
    }
    this.recepieForm = new FormGroup({
      'name': new FormControl(recepieName, Validators.required),
      'imageUrl': new FormControl(recepieImagePath, Validators.required),
      'description': new FormControl(recepieDescription, Validators.required),
      'ingredients': recepieIngredients,
    });
  }


}
