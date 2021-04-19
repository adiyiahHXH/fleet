import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromList from './reducers/list.reducer'

export const featureKey = 'list';

export const selectListState = createFeatureSelector<State>(featureKey);

export interface State {
  [fromList.featureKey]: fromList.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromList.featureKey]: fromList.reducer,
};