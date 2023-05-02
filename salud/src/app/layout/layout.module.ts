import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../shared/material/material.module';
import { SettingsMenuComponent } from './ui-elements/settings-menu/settings-menu.component';
import { DateMenuComponent } from './ui-elements';
import { LayoutComponent } from './layout/layout.component';
import { HeaderModule } from "./header/header.module";
import { SidenavComponent } from './sidenav/sidenav.component';


@NgModule({
    declarations: [
        SidenavComponent,
        FooterComponent,
        SettingsMenuComponent,
        DateMenuComponent,
        LayoutComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        FormsModule,
        HeaderModule,
    ],
    exports: [
      HeaderModule,
      SidenavComponent,
      FooterComponent,
      SettingsMenuComponent,
      DateMenuComponent,
      LayoutComponent
    ]
})
export class LayoutModule { }
