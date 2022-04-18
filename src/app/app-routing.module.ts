import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecepieListComponent} from "./recepies/recepie-list/recepie-list.component";
import {RecepiesComponent} from "./recepies/recepies.component";
import {RecepieItemComponent} from "./recepies/recepie-list/recepie-item/recepie-item.component";
import {RecepieDetailComponent} from "./recepies/recepie-detail/recepie-detail.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";

const appRoot: Routes = [
  {path: '', redirectTo: 'recepies', pathMatch: 'full'},
  {
    path: 'recepies',
    component: RecepieListComponent,
    children: [
      {path: ':id', component: RecepieItemComponent},
      {path: ':id/detail', component: RecepieDetailComponent}
    ]
  },
  {path:'shopping-list', component: ShoppingListComponent }
]


@NgModule({
  imports: [
    RouterModule.forRoot(appRoot)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
