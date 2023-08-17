import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeRoutingModule } from './me-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxLoadingModule } from "ngx-loading";
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [ IndexComponent ],
  imports: [
    CommonModule,
    MeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxLoadingModule.forRoot({}),
  ]
})
export class MeModule { }
