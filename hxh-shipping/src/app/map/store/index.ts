import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromMap from '../store/reducers/map.reducer'

export const featureKey = 'map';

export const selectMapState = createFeatureSelector<State>(featureKey);

export interface State {
  [fromMap.featureKey]: fromMap.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromMap.featureKey]: fromMap.reducer,
};