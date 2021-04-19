import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromMap from "../store/reducers/map.reducer"
import * as MapSelectors from "../store/selectors/map.selectors"
import * as IMapActions from '../store/actions/map.actions'

@Component({
  selector: 'app-map-container',
  templateUrl: './map.container.html',
  styleUrls: ['./map.container.scss'],
})
export class MapContainer implements OnInit {
  store$: Observable<fromMap.State>;

  constructor(private store: Store<fromMap.State>) {
    this.store$ = this.store.select(MapSelectors.selectMapVechiclesState);
  }

  ngOnInit(): void {
    this.store.dispatch(IMapActions.loadVechicles());
  }
}