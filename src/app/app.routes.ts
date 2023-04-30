import { RouterModule, Routes } from '@angular/router';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'converter', component: DashboardComponent },
  { path: '', redirectTo: '/converter', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
];

export const APP_ROUTE = RouterModule.forRoot(routes, { useHash: true });
