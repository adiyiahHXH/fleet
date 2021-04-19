import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromList from "../store/reducers/list.reducer"
import * as ListSelectors from "../store/selectors/list.selectors"
import * as IListActions from '../store/actions/list.actions'

@Component({
  selector: 'app-list-container',
  templateUrl: './list.container.html',
  styleUrls: ['./list.container.scss'],
})
export class ListContainer implements OnInit {
  store$: Observable<fromList.State>;

  constructor(private store: Store<fromList.State>) {
    this.store$ = this.store.select(ListSelectors.selectListVechiclesState);
  }

  ngOnInit(): void {
    this.store.dispatch(IListActions.loadVechicles());
  }
}