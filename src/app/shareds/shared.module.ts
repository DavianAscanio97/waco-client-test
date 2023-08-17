import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxLoadingModule } from 'ngx-loading';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomPaginationComponent } from './components/custom-pagination/custom-pagination.component';

@NgModule({
  declarations: [
    CustomPaginationComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    NgxLoadingModule
  ],
  exports: [
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    CustomPaginationComponent
  ],
  providers: []
})
export class SharedModule { }
