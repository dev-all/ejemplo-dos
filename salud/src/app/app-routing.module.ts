import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './modules/error-page/error-page.component';
import { LayoutComponent } from './layout/layout/layout.component';


const routes: Routes = [

  {
    path: 'login',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },

  {
    path: '',
    component: LayoutComponent,
   // canActivate: [AuthGuard],
    children: [
      {
        path: 'general',
        loadChildren: () => import('./modules/general/general.module').then(m => m.GeneralModule)
      },
    ]
  },

  {
    path: 'error',
    component: ErrorPageComponent

  },
  {
    path: 'error/:type',
    component: ErrorPageComponent ,
    data: {
      'type': 404,
      'title': 'Page Not Found',
      'desc': 'Oopps!! The page you were looking for doesn\'t exist.'
    }
  },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
