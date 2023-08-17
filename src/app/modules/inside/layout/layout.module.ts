import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsideFooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { InsideBodyComponent } from './body/body.component';
import { InsideHeaderComponent } from './header/header.component';

@NgModule({
  declarations: [InsideFooterComponent, InsideBodyComponent, InsideHeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [InsideFooterComponent, InsideFooterComponent, InsideHeaderComponent],
})
export class LayoutInsideModule { }
