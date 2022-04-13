import {Component, OnInit, Input, ElementRef, ViewChild, Output, EventEmitter} from '@angular/core';
import {Recepie} from "../../recepie.model";

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {

  @Input() recepie: Recepie | undefined;
  @Output() selectedRecepie = new EventEmitter<void>();



  constructor() { }

  ngOnInit(): void {
  }

  onClickRecepie(){
    this.selectedRecepie.emit();
  }

}
