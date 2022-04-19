import {Component, OnInit} from '@angular/core';
import { Recepie } from '../../shared/recepie.model';
import {RecepieService} from "../recepie.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {

  recepies: Recepie[] = [];

  constructor(private recepieListService: RecepieService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recepies = this.recepieListService.getRecepies();
  }

  onNewRecepie(){
        this.router.navigate(['new'], {relativeTo: this.route});
  }

}
