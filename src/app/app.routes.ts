import { RouterModule, Routes } from '@angular/router';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { EncodeComponent } from './pages/encode/encode.component';
import { DecodeComponent } from './pages/decode/decode.component';

const routes: Routes = [
  { path: 'encode', component: EncodeComponent },
  { path: 'decode', component: DecodeComponent },
  { path: '', redirectTo: '/encode', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
];

export const APP_ROUTE = RouterModule.forRoot(routes, { useHash: true });
