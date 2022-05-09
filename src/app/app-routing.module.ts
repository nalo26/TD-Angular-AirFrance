import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAirFranceComponent } from './components/view-airfrance/view-airfrance.component';
import { TYPE } from './constants/type_atterissage.constant';

const routes: Routes = [
  {
    path: 'decollages',
    component: ViewAirFranceComponent,
    data: { type: TYPE.DEPARTURE },
  },
  {
    path: 'atterissages',
    component: ViewAirFranceComponent,
    data: { type: TYPE.ARRIVAL },
  },
  { path: '**', redirectTo: 'decollages' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
