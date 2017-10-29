import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { ProfileComponent } from './profile.component';
import { AccountDelComponent } from './account-del/account-del.component';
import { PassChangeComponent } from './pass-change/pass-change.component';

const profileRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
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
        component: PassChangeComponent
      },
      {
        path: 'delete_acct',
        pathMatch: 'full',
        component: AccountDelComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(profileRoutes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
