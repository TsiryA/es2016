import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }      from './components/src/heroes.component';
import { DashboardComponent }   from './components/src/dashboard.component';
import { HeroDetailComponent }   from './components/src/hero-detail.component';

const appRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
];


export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
