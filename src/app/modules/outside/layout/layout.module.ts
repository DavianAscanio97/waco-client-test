import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OutsideFooterComponent } from './footer/footer.component';
import { OutsideBodyComponent } from './body/body.component';
import { OutsideHeaderComponent } from './header/header.component';
@NgModule({
  declarations: [OutsideFooterComponent, OutsideBodyComponent, OutsideHeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [OutsideFooterComponent, OutsideBodyComponent],
})
export class LayoutOutsideModule { }
