import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { NotFoundComponent } from './not-found/not-found.component';
import { InternalServerComponent } from './internal-server/internal-server.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Example Pages'
    },
    children: [
      {
        path: '404',
        component: NotFoundComponent,
        data: {
          title: 'Page 404'
        }
      },
      {
        path: '500',
        component: InternalServerComponent,
        data: {
          title: 'Page 500'
        }
      },
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Login Page'
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          title: 'Register Page'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
