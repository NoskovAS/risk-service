import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { RiskListModule } from './risk-list/risk-list.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RiskListComponent } from './risk-list/risk-list.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

import { AuthGuard } from './guard/auth.guard';
import { ProfileService } from './service/profile/profile.service';
import { RiskListService } from './service/risk-list/risk-list.service';
import { AuthService } from './service/auth/auth.service';
import { ValidateService } from './service/validator/validate.service';
import { TableService } from './service/table/table.service';
import { ValidatorService } from './service/validator/validator.service';
import { SharedModule } from './share/shared.module';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminService } from './service/admin/admin.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    NavbarComponent,
    EditProfileComponent,
    FooterComponent,
    LandingPageComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    RiskListModule,
    FormsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [],
  providers: [
    ValidateService,
    AuthService,
    RiskListService,
    TableService,
    ProfileService,
    ValidatorService,
    AdminService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
