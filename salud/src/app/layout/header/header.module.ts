import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent, EmailComponent } from './components';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { SearchComponent } from './components/search/search.component';
import { ShortNamePipe } from './pipes';
import { HeaderComponent } from './containers';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    UserComponent,
    EmailComponent,
    NotificationsComponent,
    SearchComponent,
    ShortNamePipe
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
   CommonModule,
   MaterialModule
  ]
})
export class HeaderModule { }
