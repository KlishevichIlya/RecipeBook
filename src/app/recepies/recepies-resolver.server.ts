import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Recepie} from "../shared/recepie.model";
import {DataStorageService} from "../shared/data-storage.service";
import {Observable} from "rxjs";
import {RecepieService} from "./recepie.service";

@Injectable({providedIn: 'root'})
export class RecepiesResolverServer implements Resolve<Recepie[]>{

  constructor(private dataStorageService: DataStorageService,
              private recepieService: RecepieService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Recepie[]> | Promise<Recepie[]> | Recepie[] {
      const recepies = this.recepieService.getRecepies();
      if(recepies.length === 0){
        return this.dataStorageService.fetchRecepies();
      } else {
        return recepies;
      }
  }

}
