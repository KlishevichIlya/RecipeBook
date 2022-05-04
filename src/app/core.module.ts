import {NgModule} from "@angular/core";
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {RecepieService} from "./recepies/recepie.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthIntercetorService} from "./auth/auth-intercetor";

@NgModule({
  providers: [
    ShoppingListService,
    RecepieService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthIntercetorService, multi: true}
  ]
})
export class CoreModule{
}
