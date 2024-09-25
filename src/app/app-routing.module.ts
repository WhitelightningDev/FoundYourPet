import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';  // Import SignUpComponent
import { LoginComponent } from './login/login.component';      // Import LoginComponent

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sign-up',
    component: SignUpComponent  // Use SignUpComponent for 'sign-up' path
  },
  {
    path: 'login',
    component: LoginComponent  // Use LoginComponent for 'login' path
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
