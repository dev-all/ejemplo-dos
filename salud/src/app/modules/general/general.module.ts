import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { GeneralComponent } from './general.component';
import { BlankComponent } from './blank/blank.component';
import { LayoutModule } from '@angular/cdk/layout';

const routes: Routes = [
  {
    path: '',
    component: GeneralComponent,
    children: [
      {
        path: '',
        redirectTo: 'blank-page',
        //canActivate :[AuthGuard]
        pathMatch: 'full'      /// esta propiedad es para redirigir exactamente a la propiedad redirectTo
      },
      {
        path: 'blank-page',
        component: BlankComponent,
       // canActivate :[AuthGuard]
      },
    ]
  }


]

@NgModule({
  declarations: [GeneralComponent, BlankComponent],
  imports: [
    LayoutModule,
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GeneralModule { }
