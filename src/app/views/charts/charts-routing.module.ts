import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { ChartjsComponent } from './chartjs/chartjs.component';

const routes: Routes = [
  {
    path: '',
    component: ChartjsComponent,
    data: {
      title: 'Charts'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
