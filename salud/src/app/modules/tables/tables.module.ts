import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesPageComponent } from './containers';
import { TablesRoutingModule } from './tables-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { EmployeeTableComponent, MaterialTableComponent } from './components';
import { TablesService } from './services';

@NgModule({
  declarations: [
    TablesPageComponent,
    MaterialTableComponent,
    EmployeeTableComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    SharedModule
  ],
  providers: [
    TablesService
  ]
})
export class TablesModule { }
