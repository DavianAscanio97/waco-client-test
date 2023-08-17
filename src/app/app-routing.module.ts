import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutsideBodyComponent } from './modules/outside/layout/body/body.component';
import { OUTSIDE_ROUTES } from './routes/outside-layout-routes';
import { INSIDE_LAYOUT } from './routes/inside-layout-routes';
import { InsideBodyComponent } from './modules/inside/layout/body/body.component';

const routes: Routes = [
  { path: '', component: OutsideBodyComponent, children: OUTSIDE_ROUTES },
  { path: 'me', component: InsideBodyComponent, children: INSIDE_LAYOUT },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
