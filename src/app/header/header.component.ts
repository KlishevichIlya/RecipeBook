import {Component, EventEmitter, Output} from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
})

export class HeaderComponent{
  //public flag = true;
  @Output() eventEmmit = new EventEmitter<string>();

  onShowRecepies(){
    this.eventEmmit.emit('Recepie');
  }

  onShowShoppingList(){
    this.eventEmmit.emit('ShopList');
  }
}
