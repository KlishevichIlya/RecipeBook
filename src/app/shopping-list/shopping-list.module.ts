import {NgModule} from "@angular/core";
import {ShoppingListComponent} from "./shopping-list.component";
import {ShopingEditComponent} from "./shoping-edit/shoping-edit.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShopingEditComponent,
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
    {path:'', component: ShoppingListComponent }
  ])]
})
export class ShoppingListModule{

}
