import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { LayoutModule } from '@layout/layout.module';
import { SettingsMenuComponent } from './components/settings-menu/settings-menu.component';
@NgModule({
  declarations: [SettingsMenuComponent
  ],
  imports: [
    RouterModule,
    MaterialModule,
    LayoutModule,

    ],

  exports: [ MaterialModule, LayoutModule],
})
export class SharedModule { }
