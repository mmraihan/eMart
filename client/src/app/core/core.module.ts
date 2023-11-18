import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TestErrorComponent } from './test-error/test-error.component';



@NgModule({
  declarations: [
    NavBarComponent,
    SectionHeaderComponent,
    TestErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BreadcrumbModule,
    NgxSpinnerModule,
  ],
  exports:[
    NavBarComponent,
    SectionHeaderComponent,
    NgxSpinnerModule,
  ]
})
export class CoreModule { }
