import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { LayoutModule } from '../layout/layout.module';
@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule,
    MaterialModule,
    LayoutModule
    ],

  exports: [ MaterialModule, LayoutModule],
})
export class SharedModule { }
