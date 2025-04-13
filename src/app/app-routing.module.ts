import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RestoComponent } from './resto/resto.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes= [
  { path:'',component:RestoComponent},
  { path:'resto',component:RestoComponent},
  { path: 'login',component:LoginComponent},
  { path:'signup',component:SignupComponent},
  { path:'forgot-password',component:ForgotPasswordComponent},
  { path:'home',component:HomeComponent},
  { path:'menu',component:MenuComponent},

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
