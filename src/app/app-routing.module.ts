import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const childrenRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'contact', redirectTo: 'contact-us', pathMatch: 'full' },
  { path: 'contact-us',  loadChildren: () => import('./pages/contact-us/contact-us.module').then(m => m.ContactUsModule) },
];
const routes: Routes = [
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: '', component: LayoutComponent, children: childrenRoutes }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
