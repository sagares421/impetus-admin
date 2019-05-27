import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { SampleOneComponent } from './sample-one/sample-one.component';

const routes: Routes = [
  {
    path: '',
    component: SampleOneComponent,
    data: {
      title: 'Widgets'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetsRoutingModule { }
