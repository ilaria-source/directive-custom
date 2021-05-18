import { Directive, OnInit, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirettivaCustom]'
})
export class DirettivaCustomDirective implements OnInit {
  //capita di sovente che voglia un'inizializzazione della variabile
  @Input()  background: string = '';
  @Input() coloreDiEnter: string = '';
  @HostBinding('style.backgroundColor')  backgroundColor: string = '';

  constructor() {}

  ngOnInit(){
     this.backgroundColor = this.background;
  }
  @HostListener('mouseenter') mouseover(eventData: Event)
  {
    this.backgroundColor = this.coloreDiEnter;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event)
  {
    this.backgroundColor = this.background;
  }

}
