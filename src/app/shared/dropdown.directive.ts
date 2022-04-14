import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective implements OnInit{

  @HostBinding('class.open')
  public flagToggle!: boolean;


  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {

  }

  @HostListener('click') dropDownClick(event: Event){
    this.flagToggle = !this.flagToggle;
  }


}
