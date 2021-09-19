import { Directive, HostListener, ElementRef } from '@angular/core';
let test: NodeListOf<ChildNode>;

@Directive({
  selector: '[appLoginInput]'
})
export class LoginInputDirective {
  constructor(private MyElement: ElementRef) { 
    this.MyElement.nativeElement
  }

  @HostListener('click', ['$event']) onMouseEnter(e: MouseEvent) {
    test = (<Element>e.currentTarget).childNodes;
    (<Element>test[0].firstChild).classList.add('focusSVG')
    e.stopPropagation();
  }

  @HostListener('document:click', ['$event']) onMouseLeave(e: MouseEvent) {
    if(test) {
      (<Element>test[0].firstChild).classList.remove('focusSVG')
    }
  }
}
