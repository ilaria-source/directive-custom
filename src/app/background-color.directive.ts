import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  //nome della direttiva creata con:  ng g(generate) d(directive) nomedirettiva
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective implements OnInit {
//ho preso una classe del typescript e memorizzata in una variabile js, diventa quindi un metodo javascript
  constructor(private elementRef: ElementRef) { }

  ngOnInit(){
    //metodo tradizionale per cambiare lo stile di una direttiva nativeElement.style.ParteDaModificare i colori funzionano anche indicati in rgb
    this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.elementRef.nativeElement.style.color='white';
    this.elementRef.nativeElement.style.fontSize='50px';
  }
}
