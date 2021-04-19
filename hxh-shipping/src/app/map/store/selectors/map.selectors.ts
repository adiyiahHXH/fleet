import { createSelector } from "@ngrx/store";
import { selectMapState, State } from "..";

import * as fromMap from "../reducers/map.reducer"

export const selectMapVechiclesState = createSelector(
  selectMapState,
  (state: State) => state[fromMap.featureKey]
)