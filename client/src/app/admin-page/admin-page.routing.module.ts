import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardMessagesComponent } from './admin-dashboard/admin-main/dashboard-messages/dashboard-messages.component';
import { DashboardTablesComponent } from './admin-dashboard/admin-main/dashboard-tables/dashboard-tables.component';
import { DashboardChartsComponent } from './admin-dashboard/admin-main/dashboard-charts/dashboard-charts.component';
import { AdminPageComponent } from './admin-page.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminMainComponent } from './admin-dashboard/admin-main/admin-main.component';


const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminDashboardComponent, // AdminPageComponent
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: AdminMainComponent
            },
            {
                path: 'charts',
                pathMatch: 'full',
                component: DashboardChartsComponent
            },
            {
                path: 'tables',
                pathMatch: 'full',
                component: DashboardTablesComponent
            },
            {
                path: 'messages',
                pathMatch: 'full',
                component: DashboardMessagesComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class AdminPageRoutingModule {}
