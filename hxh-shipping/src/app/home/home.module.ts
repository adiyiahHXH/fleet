import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { HomeComponent } from './components/home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],

  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule
  ],
})
export class HomeModule {}