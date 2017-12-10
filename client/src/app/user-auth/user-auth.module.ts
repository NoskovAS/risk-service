import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAuthRoutingModule } from './user-auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SocialAuthComponent } from './login/social-auth/social-auth.component';
import { SharedModule } from '../share/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgottenPassComponent } from './login/forgotten-pass/forgotten-pass.component';

@NgModule({
  imports: [
    CommonModule,
    UserAuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    RegisterComponent,
    LoginComponent,
    SocialAuthComponent,
    ForgottenPassComponent
  ]
})
export class UserAuthModule { }
