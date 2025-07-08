import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { SettingsComponent } from './dashboard/settings/settings.component';

// app-routing.module.ts
export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent }, // Nuovo componente per la home
      { path: 'dashboard/settings', component: SettingsComponent }
    ]
  },
  { path: '**', component: EmptyRouteComponent }
];
