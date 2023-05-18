import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { INTERNAL_PATHS } from '@data/consts/routes/internal.routes';


const routes: Routes = [
  {
    path: INTERNAL_PATHS.AUTH_LOGIN,
    component: LoginComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class AuthRoutingModule {
}
