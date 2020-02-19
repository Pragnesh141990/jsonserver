import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMydirectrive]'
})
export class MydirectriveDirective {

  constructor( ele:ElementRef, ren:Renderer2) {

    ele.nativeElement.innerText='Hello Pragnesh';
    ren.setStyle(ele.nativeElement, 'color', 'blue');
   }
}
