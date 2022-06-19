import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/shared/dashboard/dashboard.component';
import { LoginComponent } from './modules/shared/login/login.component';
import { NotFoundComponent } from './modules/shared/not-found/not-found.component';

const routes: Routes = [
  {path: '', pathMatch:"full", component:DashboardComponent},
  {path: 'Login', component: LoginComponent},
  {path:"PageNotFound", component: NotFoundComponent},
  { path:'**' , redirectTo:'/PageNotFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
