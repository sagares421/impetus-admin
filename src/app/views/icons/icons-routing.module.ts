import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { FontAwesomeComponent } from './font-awesome/font-awesome.component';
import { SimpleLineComponent } from './simple-line/simple-line.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Icons'
    },
    children: [
      {
        path: 'font-awesome',
        component: FontAwesomeComponent,
        data: {
          title: 'Font Awesome'
        }
      },
      {
        path: 'simple-line-icons',
        component: SimpleLineComponent,
        data: {
          title: 'Simple Line Icons'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule { }
