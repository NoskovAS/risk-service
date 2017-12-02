import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { RiskListComponent } from './risk-list/risk-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AuthGuard } from './guard/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminDashboardComponent } from './admin-page/admin-dashboard/admin-dashboard.component';
import { AdminPageRoutingModule } from './admin-page/admin-page.routing.module';
import { RiskListRoutingModule } from './risk-list/risk-list-routing.module';
import { BasicInfoComponent } from './profile/basic-info/basic-info.component';
import { ProfileRoutingModule } from './profile/profile-routing.module';
import { ReportComponent } from './footer/report/report.component';
// Temp

const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent,
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'report',
        canActivate: [AuthGuard],
        component: ReportComponent
    },
    {
        path: 'risklist',
        children: [
            { path: '', component: RiskListComponent }
        ]
    },
    {
        path: 'admin',
        children: [
            { path: '', component: AdminPageComponent },
        ]
    },
    {
        path: 'profile',
        children: [
            { path: '', component: BasicInfoComponent },
        ]
    },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        AdminPageRoutingModule,
        RiskListRoutingModule,
        ProfileRoutingModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
