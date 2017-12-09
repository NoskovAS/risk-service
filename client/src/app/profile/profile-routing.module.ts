import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { ProfileComponent } from './profile.component';
import { AccountDelComponent } from './account-del/account-del.component';
import { PassChangeComponent } from './pass-change/pass-change.component';
import { AuthGuard } from '../guard/auth/auth.guard';
import { SocialAuthGuard } from '../guard/social-auth/social-auth.guard';

const profileRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'account',
      },
      {
        path: 'account',
        pathMatch: 'full',
        component: BasicInfoComponent
      },
      {
        path: 'password',
        pathMatch: 'full',
        component: PassChangeComponent,
        canActivate: [SocialAuthGuard],
      },
      {
        path: 'delete_acct',
        pathMatch: 'full',
        component: AccountDelComponent,
        canActivate: [SocialAuthGuard],
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(profileRoutes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
