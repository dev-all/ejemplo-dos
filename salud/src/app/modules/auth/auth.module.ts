import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowForRolesDirective } from './directives/show-for-roles.directive';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [LoginComponent, ShowForRolesDirective],
  imports: [CommonModule, ReactiveFormsModule,AuthRoutingModule,SharedModule],
  exports: [LoginComponent, ShowForRolesDirective],
})
export class AuthModule {}
