import { Directive , Input, TemplateRef, ViewContainerRef} from '@angular/core';
//CONTROLLA SEMPRE IL SELECTOR
@Directive({
  selector: '[appSimilIf]'
})
export class SimilIfDirective {
  @Input() set appSimilIf(condizione: boolean){
    if (condizione){
      this.vcRef.createEmbeddedView(this.templateRef);
      } else {
        this.vcRef.clear();
      }
  }
  constructor( private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {

   }

}
