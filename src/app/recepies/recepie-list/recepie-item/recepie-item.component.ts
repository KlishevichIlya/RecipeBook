import {Component, OnInit, Input, ElementRef, ViewChild, Output, EventEmitter} from '@angular/core';
import {Recepie} from "../../../shared/recepie.model";
import {RecepieService} from "../../recepie.service";

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {

  @Input() recepie: Recepie | undefined;

  constructor(private recepieListService: RecepieService) { }

  ngOnInit(): void {

  }

  onSelected(){
    this.recepieListService.selectedRecepie.emit(this.recepie);
  }

}
