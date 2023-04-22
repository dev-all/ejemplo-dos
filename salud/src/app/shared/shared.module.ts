import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
@NgModule({
  imports: [
    RouterModule,
    MaterialModule
    ],
  declarations: [

  ],
  exports: [
 ],
})
export class SharedModule { }
