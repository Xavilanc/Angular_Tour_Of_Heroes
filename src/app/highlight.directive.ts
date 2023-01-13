import { Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor() { }

    @HostBinding('class.film') condition: boolean = false;


    @HostListener('mouseenter') onMouseEnter() {
      // this.highlight('yellow');
      this.condition = true;
    }
    
    @HostListener('mouseleave') onMouseLeave() {
      // this.highlight('');
      this.condition = false;
    }
    
    // private highlight(color: string) {
    //   this.el.nativeElement.style.backgroundColor = color;
    // }
    
}
