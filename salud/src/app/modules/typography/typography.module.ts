import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { TypographyPageComponent } from './containers';
import { TypographyRoutingModule } from './typography-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { TypographyComponent } from './typography.component';

@NgModule({
  declarations: [TypographyComponent,TypographyPageComponent,],
  imports: [
    CommonModule,
    TypographyRoutingModule,
    SharedModule
  ]
})
export class TypographyModule { }
