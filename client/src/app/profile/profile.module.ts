import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { AccountDelComponent } from './account-del/account-del.component';
import { PassChangeComponent } from './pass-change/pass-change.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../share/shared.module';

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
    AccountDelComponent
  ]
})
export class ProfileModule { }
