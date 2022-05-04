import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {RecepieListComponent} from "./recepies/recepie-list/recepie-list.component";
import {RecepiesComponent} from "./recepies/recepies.component";
import {RecepieItemComponent} from "./recepies/recepie-list/recepie-item/recepie-item.component";
import {RecepieDetailComponent} from "./recepies/recepie-detail/recepie-detail.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecepieStartComponent} from "./recepies/recepie-start/recepie-start.component";
import {RecepieEditComponent} from "./recepies/recepie-edit/recepie-edit.component";
import {RecepiesResolverServer} from "./recepies/recepies-resolver.server";
import {AuthComponent} from "./auth/auth.component";
import {AuthGuard} from "./auth/auth.guard";

const appRoot: Routes = [
  {path: '', redirectTo: 'recepies', pathMatch: 'full'},
  {
    path: 'recepies',
    loadChildren: () => import('./recepies/recepies.module').then(m => m.RecepiesModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'shopping-list',
    loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule)
  }

]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoot, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
