import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BaseComponent } from './base/base.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [BaseComponent, SidenavComponent, ToolbarComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
})
export class LayoutModule { }
