import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
  },
  {
    path: 'add-investment',
    loadComponent: () =>
      import('./investment-form/investment-form.component').then(
        (c) => c.InvestmentFormComponent
      ),
  },
];
