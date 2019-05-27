import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { WidgetsRoutingModule } from './widgets-routing.module';
import { SampleOneComponent } from './sample-one/sample-one.component';

@NgModule({
  declarations: [SampleOneComponent],
  imports: [
    CommonModule,
    WidgetsRoutingModule,
    ChartsModule
  ]
})
export class WidgetsModule { }
