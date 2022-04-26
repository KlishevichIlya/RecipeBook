import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RecepieService} from "../recepies/recepie.service";
import {Recepie} from "./recepie.model";
import {map, Observable, tap} from "rxjs";

@Injectable({providedIn: 'root'})
export class DataStorageService{
    constructor(private http: HttpClient,
                private recepiesService: RecepieService) {}

    storeRecepies(): void{
      const recepies = this.recepiesService.getRecepies();
      this.http.put('https://ng-cource-recepie-book-32199-default-rtdb.firebaseio.com/recepies.json', recepies)
        .subscribe(response => {
          console.log(response);
        })
    }

    fetchRecepies(): Observable<Recepie[]>{
      return this.http.get<Recepie[]>('https://ng-cource-recepie-book-32199-default-rtdb.firebaseio.com/recepies.json')
        .pipe(map(recepies => {
          return recepies.map(recepie => {
            return {...recepie, ingredients: recepie.ingredients ? recepie.ingredients : []};
          });
        }),
          tap(recepies => {
            this.recepiesService.setRecepies(recepies);
          }));

    }
}
