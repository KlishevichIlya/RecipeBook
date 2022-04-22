import {Component, OnInit} from '@angular/core';
import {Recepie} from "../../shared/recepie.model";
import {RecepieService} from "../recepie.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {

  public recepieForDetail: Recepie | undefined;

  constructor(private recepieService: RecepieService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.recepieForDetail = this.recepieService.getRecepieById(+params['id']);
    })
  }

  onShoppingList(){

    this.recepieService.addIngredinetsToShoppingList(this.recepieForDetail!.ingredients)
  }

  onEditRecepie(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onRemoveRecepie(){
    this.recepieService.deleteRecepie(this.recepieForDetail?.id!);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
