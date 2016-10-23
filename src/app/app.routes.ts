import { Routes, RouterModule } from '@angular/router';

import { LangingComponent } from './langing/langing.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';

// Route config let's you map routes to components
const routes: Routes = [
  {
    path: 'home',
    component: LangingComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'add',
    component: AddComponent,
  },
];

export const routing = RouterModule.forRoot(routes);