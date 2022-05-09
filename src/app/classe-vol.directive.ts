import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appClasseVol]',
})
export class ClasseVolDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.editColor();
  }
  @Input() appClasseVol!: string;

  editColor(): void {
    switch (this.appClasseVol) {
      case 'BUSINESS':
        this.el.nativeElement.style.color = 'red';
        break;
      case 'PREMIUM':
        this.el.nativeElement.style.color = 'green';
        break;
      case 'STANDARD':
        this.el.nativeElement.style.color = 'blue';
        break;
    }
  }
}
