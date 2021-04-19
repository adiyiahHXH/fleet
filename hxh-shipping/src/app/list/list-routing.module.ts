import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListContainer } from './container/list.container';

const routes: Routes = [
  { 
    path: '', 
    component: ListContainer,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule {}