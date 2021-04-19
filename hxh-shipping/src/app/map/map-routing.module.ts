import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapContainer } from './container/map.container';

const routes: Routes = [
  { 
    path: '', 
    component: MapContainer,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule {}