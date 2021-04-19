import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { VechicleService } from "src/app/services/vechicles.service";
import { IVechicle } from "../../../shared/models/common.interface";
import * as IMapActions from '../actions/map.actions'

@Injectable()
export class MapEffects {
  loadVechicles$ = createEffect(() => this.actions$.pipe(
    ofType(IMapActions.loadVechicles),
    exhaustMap(fetchAction => this.vSvc.fetchVechicles().pipe(
      map((response: Array<IVechicle>) => IMapActions.loadVechiclesSuccess({ data: response })),
      catchError((error: any) => of(IMapActions.loadVechiclesFailure()))
    ))
  ));

  constructor(private actions$: Actions, private vSvc: VechicleService) {}
}