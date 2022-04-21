import {Component, Input, OnInit, Output} from '@angular/core';
import {Recepie} from "../shared/recepie.model";
import {RecepieService} from "./recepie.service";

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}
