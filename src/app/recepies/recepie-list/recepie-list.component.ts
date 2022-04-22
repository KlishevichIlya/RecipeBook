import {Component, OnDestroy, OnInit} from '@angular/core';
import { Recepie } from '../../shared/recepie.model';
import {RecepieService} from "../recepie.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit, OnDestroy {

  public recepies: Recepie[] = [];
  private subscription: Subscription;

  constructor(private recepieListService: RecepieService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.recepies = this.recepieListService.getRecepies();
     this.subscription = this.recepieListService.recepiesList.subscribe((newRecepieList) => {
       this.recepies = newRecepieList;
    })
  }

  onNewRecepie(){
        this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
