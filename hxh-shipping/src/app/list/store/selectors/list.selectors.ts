import { createSelector } from "@ngrx/store";
import { selectListState, State } from "..";

import * as fromMap from "../reducers/list.reducer"

export const selectListVechiclesState = createSelector(
  selectListState,
  (state: State) => state[fromMap.featureKey]
)