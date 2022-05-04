import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecepiesComponent} from "./recepies.component";
import {AuthGuard} from "../auth/auth.guard";
import {RecepieStartComponent} from "./recepie-start/recepie-start.component";
import {RecepieEditComponent} from "./recepie-edit/recepie-edit.component";
import {RecepieDetailComponent} from "./recepie-detail/recepie-detail.component";
import {RecepiesResolverServer} from "./recepies-resolver.server";

const root: Routes = [
  {
    path: '',
    component: RecepiesComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', component: RecepieStartComponent},
      {path: 'new', component: RecepieEditComponent},
      {path: ':id', component: RecepieDetailComponent, resolve: [RecepiesResolverServer]},
      {path: ':id/edit', component: RecepieEditComponent, resolve: [RecepiesResolverServer]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(root)],
  exports: [RouterModule]
})
export class RecepiesRoutingModule{

}
