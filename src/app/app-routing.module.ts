import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { signInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { GetIdPageComponent } from './pages/get-id-page/get-id-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'signin',
    component: signInPageComponent
  },
  {
    path: 'signup',
    component: SignUpPageComponent
  },
  {
    path: 'principal',
    component: PrincipalComponent
  },
  {
    path: 'getId',
    component: GetIdPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
