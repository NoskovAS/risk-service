import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { AccountDelComponent } from './account-del/account-del.component';
import { PassChangeComponent } from './pass-change/pass-change.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../share/shared.module';
import { AddPasswordComponent } from './add-password/add-password.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
    SharedModule
  ],
  declarations: [
    BasicInfoComponent,
    PassChangeComponent,
    AccountDelComponent,
    AddPasswordComponent
  ]
})
export class ProfileModule { }
