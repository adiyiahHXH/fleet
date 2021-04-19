import { createAction, props } from "@ngrx/store";

import { IVechicle } from "../../../shared/models/common.interface";

export const loadVechicles = createAction(
  '[Map] Load Vechicles'
)
  
export const loadVechiclesSuccess = createAction(
  '[Map] Load Vechicles Success',
  props<{ data: Array<IVechicle> }>()
)
  
export const loadVechiclesFailure = createAction(
  '[Map] Load Vechicles Failure'
)
