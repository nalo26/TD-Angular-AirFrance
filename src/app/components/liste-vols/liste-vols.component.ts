import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Vol } from 'src/app/models/vol.model';

@Component({
  selector: 'app-liste-vols',
  templateUrl: './liste-vols.component.html',
  styleUrls: ['./liste-vols.component.scss'],
})
export class ListeVolsComponent {
  @Input() vols!: Vol[] | undefined;
  @Output() vol_emitter: EventEmitter<Vol> = new EventEmitter();

  click(vol: Vol): void {
    this.vol_emitter.emit(vol);
  }
}
