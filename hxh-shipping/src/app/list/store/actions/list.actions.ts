import { createAction, props } from "@ngrx/store";
import { IVechicle } from "src/app/shared/models/common.interface";

export const loadVechicles = createAction(
  '[List] Load Vechicles'
)
  
export const loadVechiclesSuccess = createAction(
  '[List] Load Vechicles Success',
  props<{ data: Array<IVechicle> }>()
)
  
export const loadVechiclesFailure = createAction(
  '[List] Load Vechicles Failure'
)
