import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './modules/error-page/error-page.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { INTERNAL_ROUTES } from './data/consts/routes/internal.routes';

debugger;
const routes: Routes = [

  {
    path: '',
    redirectTo: INTERNAL_ROUTES.AUTH_LOGIN,
    pathMatch:'full'
  },
  {
    path:'auth',
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
      {
        path: 'typography',
        loadChildren: () => import('./modules/typography/typography.module').then(m => m.TypographyModule)
      },
      {
        path: 'table',
        loadChildren: () => import('./modules/tables/tables.module').then(m => m.TablesModule)
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
      'type': '404',
      'title': 'Page Not Found',
      'desc': 'Oopps!! The page you were looking for doesn\'t exist.'
    }
  },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
   })
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
