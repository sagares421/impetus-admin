import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsRoutingModule } from './icons-routing.module';
import { FontAwesomeComponent } from './font-awesome/font-awesome.component';
import { SimpleLineComponent } from './simple-line/simple-line.component';

@NgModule({
  declarations: [FontAwesomeComponent, SimpleLineComponent],
  imports: [
    CommonModule,
    IconsRoutingModule
  ]
})
export class IconsModule { }
