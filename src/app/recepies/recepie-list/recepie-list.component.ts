import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {

  public recepies: Recepie[] = [
    new Recepie("A Test Recepie", "This is a simply test",
     "https://images.immediate.co.uk/production/volatile/sites/30/2013/05/One-pan-spaghetti-f2aca14.jpg?quality=90&webp=true&resize=300,272")
  ];
  @Output() selectedItemFromList = new EventEmitter<Recepie>();


  constructor() { }

  ngOnInit(): void {
  }

  onSelectedItem(selectedItem: Recepie){
    this.selectedItemFromList.emit(selectedItem);
  }

}
