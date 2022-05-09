import { Component, Input } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Passager } from 'src/app/models/passager.model';

@Component({
  selector: 'app-liste-passagers',
  templateUrl: './liste-passagers.component.html',
  styleUrls: ['./liste-passagers.component.scss'],
})
export class ListePassagersComponent {
  @Input() passengers!: Passager[] | undefined;
  displayPassengersPicture: boolean = false;

  update(event: MatSlideToggleChange): void {
    this.displayPassengersPicture = event.checked;
  }
}
