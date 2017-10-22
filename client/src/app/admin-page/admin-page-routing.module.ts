import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardMessagesComponent } from './admin-dashboard/admin-main/dashboard-messages/dashboard-messages.component';
import { DashboardTablesComponent } from './admin-dashboard/admin-main/dashboard-tables/dashboard-tables.component';
import { DashboardChartsComponent } from './admin-dashboard/admin-main/dashboard-charts/dashboard-charts.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


const routes: Routes = [
    { path: 'admin/charts', component: DashboardChartsComponent },
    { path: 'admin/tables', component: DashboardTablesComponent },
    { path: 'messages', component: DashboardMessagesComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminPageRoutingModule {
}
