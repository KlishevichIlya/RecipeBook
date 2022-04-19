import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecepieListComponent } from './recepies/recepie-list/recepie-list.component';
import { RecepieDetailComponent } from './recepies/recepie-detail/recepie-detail.component';
import { RecepieItemComponent } from './recepies/recepie-list/recepie-item/recepie-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShopingEditComponent } from './shopping-list/shoping-edit/shoping-edit.component';
import {DropdownDirective} from "./shared/dropdown.directive";
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {RecepieService} from "./recepies/recepie.service";
import {AppRoutingModule} from "./app-routing.module";
import { RecepieStartComponent } from './recepies/recepie-start/recepie-start.component';
import { RecepieEditComponent } from './recepies/recepie-edit/recepie-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecepiesComponent,
    RecepieListComponent,
    RecepieDetailComponent,
    RecepieItemComponent,
    ShoppingListComponent,
    ShopingEditComponent,
    DropdownDirective,
    RecepieStartComponent,
    RecepieEditComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService, RecepieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
