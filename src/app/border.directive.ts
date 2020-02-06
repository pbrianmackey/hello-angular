import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[improvingBorder]'
})
export class BorderDirective {

  constructor(private elementRef: ElementRef) { 
    elementRef.nativeElement.style.border = '1px solid black';
  }
}
