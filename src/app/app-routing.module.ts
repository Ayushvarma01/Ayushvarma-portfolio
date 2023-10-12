import { Component, NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
// import { HomeComponent } from './navbar/home/home.component';
import { HomeComponent } from './navbar/home/home.component';
import { ProductComponent } from './navbar/product/product.component';
import { ContactComponent } from './navbar/contact/contact.component';
import { AboutComponent } from './navbar/about/about.component';
import { LoginSingupComponent } from './navbar/login-singup/login-singup.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "product",
    component: ProductComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "login_singup",
    component: LoginSingupComponent
  },
  {
    path: "about",
    component: AboutComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

