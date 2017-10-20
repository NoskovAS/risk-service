import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RiskListComponent } from './risk-list/risk-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AuthGuard } from './guard/auth.guard';
import { AdminGuard } from './admin-page/admin-guard/admin.guard';

const routes: Routes = [
    /* {path: '', redirectTo: '/login', pathMatch: 'full'}, */
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '', component: LandingPageComponent},
    {path: 'admin', component: AdminPageComponent, /* canActivate: [AdminGuard] */},
    {path: 'risk-list', component: RiskListComponent, canActivate: [AuthGuard] },
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    {path: 'editProfile', component: EditProfileComponent, canActivate: [AuthGuard]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
