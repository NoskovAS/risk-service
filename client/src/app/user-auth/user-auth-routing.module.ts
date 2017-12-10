import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SocialAuthComponent } from './login/social-auth/social-auth.component';
import { EnteredGuard } from '../guard/entered/entered.guard';
import { ForgottenPassComponent } from './login/forgotten-pass/forgotten-pass.component';

const routes: Routes = [
  /* { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'auth/:id', component: SocialAuthComponent } */
  {
    path: 'users',
    children: [
      {
        path: '',
        canActivate: [EnteredGuard],
        pathMatch: 'full',
        redirectTo: 'login',
      },
      {
        path: 'login',
        canActivate: [EnteredGuard],
        pathMatch: 'full',
        component: LoginComponent
      },
      {
        path: 'register',
        canActivate: [EnteredGuard],
        pathMatch: 'full',
        component: RegisterComponent
      },
      {
        path: 'auth/:id',
        pathMatch: 'full',
        component: SocialAuthComponent
      },
      {
        path: 'forgotPass',
        canActivate: [EnteredGuard],
        pathMatch: 'full',
        component: ForgottenPassComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAuthRoutingModule { }
