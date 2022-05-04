import {NgModule} from "@angular/core";
import {RecepiesComponent} from "./recepies.component";
import {RecepieListComponent} from "./recepie-list/recepie-list.component";
import {RecepieDetailComponent} from "./recepie-detail/recepie-detail.component";
import {RecepieItemComponent} from "./recepie-list/recepie-item/recepie-item.component";
import {RecepieStartComponent} from "./recepie-start/recepie-start.component";
import {RecepieEditComponent} from "./recepie-edit/recepie-edit.component";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {RecepiesRoutingModule} from "./recepies-routing.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    RecepiesComponent,
    RecepieListComponent,
    RecepieDetailComponent,
    RecepieItemComponent,
    RecepieStartComponent,
    RecepieEditComponent,
  ],
  imports:[RouterModule, SharedModule, ReactiveFormsModule, RecepiesRoutingModule],

})
export class RecepiesModule{

}
