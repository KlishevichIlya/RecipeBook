import {Component, OnDestroy, OnInit} from "@angular/core";
import {DataStorageService} from "../shared/data-storage.service";
import {AuthService} from "../auth/auth.service";
import {Subscription} from "rxjs";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
})

export class HeaderComponent implements OnInit, OnDestroy{
  private _userSub: Subscription;
  public isAuthenticated = false;

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService ) {
  }

  ngOnInit(): void {
    this._userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true;
    })
  }

  public onSaveData(): void{
    this.dataStorageService.storeRecepies();
  }

  public onFetchData(){
    this.dataStorageService.fetchRecepies().subscribe();
  }

  ngOnDestroy(): void {
    this._userSub.unsubscribe();
  }

}
