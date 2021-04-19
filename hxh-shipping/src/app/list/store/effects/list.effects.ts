import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { IVechicle } from "src/app/shared/models/common.interface";

import { VechicleService } from "src/app/services/vechicles.service";
import * as IListActions from '../actions/list.actions'

@Injectable()
export class ListEffects {
  loadVechicles$ = createEffect(() => this.actions$.pipe(
    ofType(IListActions.loadVechicles),
    exhaustMap(fetchAction => this.vSvc.fetchVechicles().pipe(
      map((response: Array<IVechicle>) => IListActions.loadVechiclesSuccess({ data: response })),
      catchError((error: any) => of(IListActions.loadVechiclesFailure()))
    ))
  ));

  constructor(private actions$: Actions, private vSvc: VechicleService) {}
}