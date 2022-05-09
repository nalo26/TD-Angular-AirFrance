import { Component, Input } from '@angular/core';
import { Passager } from 'src/app/models/passager.model';

@Component({
  selector: 'app-liste-passagers',
  templateUrl: './liste-passagers.component.html',
  styleUrls: ['./liste-passagers.component.scss']
})
export class ListePassagersComponent {
  @Input() passengers!: Passager[] | undefined;

}
