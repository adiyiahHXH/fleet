import { createReducer, on } from '@ngrx/store';
import { IVechicle } from 'src/app/shared/models/common.interface';

import * as IListActions from '../actions/list.actions'


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
  on(IListActions.loadVechicles, (state) => ({
    ...state,
    loading: true,
  })),
  on(IListActions.loadVechiclesSuccess, (state, action) => ({
    ...state,
    loading: false,
    vechicles: action.data
  })),
  on(IListActions.loadVechiclesFailure, (state, action) => ({
    ...state,
    loading: false,
    vechicles: []
  })),
);