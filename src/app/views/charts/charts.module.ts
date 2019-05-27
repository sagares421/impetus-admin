import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartjsComponent } from './chartjs/chartjs.component';

@NgModule({
  declarations: [ChartjsComponent],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    ChartsModule
  ]
})
export class ChartModule { }
