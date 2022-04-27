import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {RecepieService} from "../recepies/recepie.service";
import {Recepie} from "./recepie.model";
import {exhaustMap, map, Observable, take, tap} from "rxjs";
import {AuthService} from "../auth/auth.service";

@Injectable({providedIn: 'root'})
export class DataStorageService{
    constructor(private http: HttpClient,
                private recepiesService: RecepieService,
                private authService: AuthService) {}

    storeRecepies(): void{
      const recepies = this.recepiesService.getRecepies();
      this.http
        .put(
          'https://ng-cource-recepie-book-32199-default-rtdb.firebaseio.com/recepies.json',
          recepies)
        .subscribe(response => {
          console.log(response);
        })
    }

    fetchRecepies(): Observable<Recepie[]>{
      return this.http.get<Recepie[]>(
        'https://ng-cource-recepie-book-32199-default-rtdb.firebaseio.com/recepies.json'
      ).pipe(
        map(recepies => {
          return recepies.map(recepie => {
            return {...recepie, ingredients: recepie.ingredients ? recepie.ingredients : []};
          });
        }),
        tap(recepies => {
          this.recepiesService.setRecepies(recepies);
        })
      );

/*      return this.authService.user.pipe(
        take(1),
        exhaustMap(user => {
          console.log(user?.token);
          return this.http.get<Recepie[]>(
            'https://ng-cource-recepie-book-32199-default-rtdb.firebaseio.com/recepies.json',
            {
              params: new HttpParams().set('auth', user?.token!),
            }
            );
        }),
        map(recepies => {
          return recepies.map(recepie => {
            return {...recepie, ingredients: recepie.ingredients ? recepie.ingredients : []};
          });
        }),
        tap(recepies => {
          this.recepiesService.setRecepies(recepies);
        }));*/
    }
}
