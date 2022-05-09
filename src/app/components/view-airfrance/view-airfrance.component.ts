import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IFiltres } from 'src/app/models/filtres.model';
import { Vol } from 'src/app/models/vol.model';
import { VolService } from '../../services/vol.service';

@Component({
  selector: 'app-view-airfrance',
  templateUrl: './view-airfrance.component.html',
  styleUrls: ['./view-airfrance.component.scss'],
})
export class ViewAirFranceComponent implements OnDestroy {
  vols: Vol[] = [];

  private _subscription: Subscription = new Subscription();

  constructor(private _volService: VolService) {}

  /**
   * Réaction à la mise à jour des filtres
   * On souhaite récupérer les vols qui correspondent aux filtres passés en paramètre
   * en utilisant le service défini dans le constructeur
   * @param filtres récupérés depuis le composant enfant
   */
  onFiltresEvent(filtres: IFiltres): void {
    let subscription: Subscription = this._volService
      .getVolsDepart(
        filtres.aeroport.icao,
        filtres.debut.getTime() / 1000,
        filtres.fin.getTime() / 1000
      )
      .subscribe((vols) => {
        this.vols = vols;
      });
    this._subscription.add(subscription);
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
