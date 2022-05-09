import { Directive, OnInit, Input, ElementRef } from '@angular/core';
import { Passager } from './models/passager.model';

@Directive({
  selector: '[appCheckLuggageLimit]',
})
export class CheckLuggageLimitDirective implements OnInit {
  @Input() appCheckLuggageLimit!: Passager;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.checkPassengerBagsLimit();
  }

  checkPassengerBagsLimit(): void {
    let classe = this.appCheckLuggageLimit.classeVol;
    let bagages = this.appCheckLuggageLimit.nbBagagesSoute;

    if (
      (classe == 'STANDARD' && bagages > 1) ||
      (classe == 'BUSINESS' && bagages > 2) ||
      (classe == 'PREMIUM' && bagages > 3)
    ) {
      this.el.nativeElement.style.color = 'red';
    }
  }
}
