import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MapComponent } from './components/map.component';
import * as fromMap from './store';
import { MapEffects } from './store/effects/map.effects';
import { MapContainer } from './container/map.container';
import { MapRoutingModule } from './map-routing.module';


@NgModule({
  declarations: [MapComponent, MapContainer],
  imports: [
    CommonModule,
    MapRoutingModule,
    MatProgressSpinnerModule,
    GoogleMapsModule,
    StoreModule.forFeature(fromMap.featureKey, fromMap.reducers),
    EffectsModule.forFeature([MapEffects])
  ]
})
export class MapModule {}