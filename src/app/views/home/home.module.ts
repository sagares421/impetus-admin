import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ChartsModule,
    BsDropdownModule
  ]
})
export class HomeModule { }
