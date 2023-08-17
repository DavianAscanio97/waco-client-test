import { Routes } from '@angular/router';
import { GuestGuard } from '@app/config/guards/guest.guard';

export const OUTSIDE_ROUTES: Routes = [
  {
    path: '',
    canActivate: [GuestGuard],
    loadChildren: () =>
      import('../modules/outside/outside.module').then((m) => m.OutsideModule),
  },
];
