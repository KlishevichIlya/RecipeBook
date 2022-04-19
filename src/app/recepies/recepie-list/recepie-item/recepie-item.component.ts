import {Component, OnInit, Input} from '@angular/core';
import {Recepie} from "../../../shared/recepie.model";

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {

  @Input() recepie: Recepie | undefined;

  ngOnInit(): void {
  }
}
