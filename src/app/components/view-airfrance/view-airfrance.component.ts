import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IFiltres } from 'src/app/models/filtres.model';
import { Vol } from 'src/app/models/vol.model';
import { VolService } from '../../services/vol.service';
import { PassagerService } from '../../services/passager.service';
import { Passager } from 'src/app/models/passager.model';
import { ActivatedRoute } from '@angular/router';
import { TYPE } from 'src/app/constants/type_atterissage.constant';

@Component({
  selector: 'app-view-airfrance',
  templateUrl: './view-airfrance.component.html',
  styleUrls: ['./view-airfrance.component.scss'],
})
export class ViewAirFranceComponent implements OnDestroy, OnInit {
  vols!: Vol[];
  passagers!: Passager[];
  type!: string;
  private _subscription: Subscription = new Subscription();

  constructor(
    private _volService: VolService,
    private _passagerService: PassagerService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let subscription: Subscription = this._activatedRoute.data.subscribe(
      (data$) => {
        this.type = data$['type'] ? data$['type'] : TYPE.DEPARTURE;
      }
    );
    this._subscription.add(subscription);
  }

  /**
   * Réaction à la mise à jour des filtres
   * On souhaite récupérer les vols qui correspondent aux filtres passés en paramètre
   * en utilisant le service défini dans le constructeur
   * @param filtres récupérés depuis le composant enfant
   */
  onFiltresEvent(filtres: IFiltres): void {
    let subscription: Subscription = this._volService
      .getVols(
        filtres.aeroport.icao,
        filtres.debut.getTime() / 1000,
        filtres.fin.getTime() / 1000,
        this.type
      )
      .subscribe((vols) => {
        this.vols = vols;
      });
    this._subscription.add(subscription);
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  handleVol(vol: Vol): void {
    let subscription: Subscription = this._passagerService
      .getPassagers(vol.icao)
      .subscribe((passagers) => {
        this.passagers = passagers;
      });
    this._subscription.add(subscription);
  }
}
