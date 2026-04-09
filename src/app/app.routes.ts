import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home').then(m => m.Home)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about').then(m => m.About)
  },
  {
    path: 'systems',
    loadComponent: () => import('./pages/systems').then(m => m.Systems)
  },
  {
    path: 'ecosystem',
    loadComponent: () => import('./pages/ecosystem').then(m => m.Ecosystem)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact').then(m => m.Contact)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
