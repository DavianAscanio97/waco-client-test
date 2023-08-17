import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutsideRoutingModule } from './outside-routing.module';
import { LayoutOutsideModule } from './layout/layout.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OutsideRoutingModule,
    LayoutOutsideModule
  ]
})
export class OutsideModule { }
