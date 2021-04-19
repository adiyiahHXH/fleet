import { createReducer, on } from '@ngrx/store';

import { IVechicle } from '../../../shared/models/common.interface';
import * as IMapActions from '../actions/map.actions'


export const featureKey = 'vechicles';

export interface State {
  loading: boolean;
  vechicles: Array<IVechicle>;
}

export const initialState: State = {
  loading: false,
  vechicles: [],
};

export const reducer = createReducer(
  initialState,
  on(IMapActions.loadVechicles, (state) => ({
    ...state,
    loading: true,
  })),
  on(IMapActions.loadVechiclesSuccess, (state, action) => ({
    ...state,
    loading: false,
    vechicles: action.data
  })),
  on(IMapActions.loadVechiclesFailure, (state, action) => ({
    ...state,
    loading: false,
    vechicles: []
  })),
);