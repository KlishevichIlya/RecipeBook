import {NgModule} from "@angular/core";
import {LoadingSpinnerComponent} from "./loading-spinner/loading-spinner.component";
import {DropdownDirective} from "./dropdown.directive";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    DropdownDirective
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    LoadingSpinnerComponent,
    DropdownDirective,
    CommonModule,
    FormsModule]
})
export class SharedModule{

}
