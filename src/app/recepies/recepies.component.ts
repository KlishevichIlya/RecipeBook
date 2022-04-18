import {Component, OnInit, Output} from '@angular/core';
import {Recepie} from "../shared/recepie.model";
import {RecepieService} from "./recepie.service";

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {

  public recepieForDetail : Recepie | undefined;

  constructor(private recepieService: RecepieService) { }

  ngOnInit(): void {
    this.recepieService.selectedRecepie.subscribe((recepie: Recepie) => {this.recepieForDetail = recepie});
  }



}
