import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    DashboardComponent,
    LoginComponent,
    
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
