import { Routes } from '@angular/router';
import { AuthGuard } from '@app/config/guards/auth.guard';

export const INSIDE_LAYOUT: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('../modules/inside/inside.module').then((m) => m.InsideModule),
  },
];
