import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsideRoutingModule } from './inside-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LayoutInsideModule } from './layout/layout.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InsideRoutingModule,
    HttpClientModule,
    LayoutInsideModule
  ]
})
export class InsideModule { }
