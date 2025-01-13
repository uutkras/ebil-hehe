import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadChildren:() => import ('./modules/home/home.module').then((m) => m.HomeModule)},
  {path:'home', loadChildren:() => import ('./modules/home/home.module').then((m) => m.HomeModule)},
  {path:'admin', loadChildren:() => import ('./modules/admin/admin.module').then((m) => m.AdminModule)},
  {path:'customer', loadChildren:() => import ('./modules/customer/customer.module').then((m) => m.CustomerModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
