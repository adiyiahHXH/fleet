import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromMap from './store';
import { ListComponent } from './components/list.component';
import { ListRoutingModule } from './list-routing.module';
import { ListEffects } from './store/effects/list.effects';
import { ListContainer } from './container/list.container';


@NgModule({
  declarations: [ListComponent, ListContainer],
  imports: [
    CommonModule,
    ListRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    StoreModule.forFeature(fromMap.featureKey, fromMap.reducers),
    EffectsModule.forFeature([ListEffects])
  ]
})
export class ListModule {}