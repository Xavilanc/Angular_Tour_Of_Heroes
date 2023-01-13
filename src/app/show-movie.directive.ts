import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowMovie]'
})
export class ShowMovieDirective {

  @Input() set appShowMovie(condition: boolean) {
    if(condition) {
      this.vwRef.createEmbeddedView(this.tplRef);
    } else {
      this.vwRef.clear();
    }
  }

  constructor(
    private tplRef: TemplateRef<any>, 
    private vwRef: ViewContainerRef
    ) { }

}
