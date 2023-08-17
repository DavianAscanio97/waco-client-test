import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxLoadingModule } from "ngx-loading";
import { IndexComponent } from './index/index.component';
import { SharedModule } from '@app/shareds/shared.module';
import { ListFilterPipe } from '@app/config/paginate.pipe';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [IndexComponent, ListFilterPipe, FormComponent ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    NgbPaginationModule,
    NgxLoadingModule.forRoot({}),
  ]
})
export class UsersModule { }
