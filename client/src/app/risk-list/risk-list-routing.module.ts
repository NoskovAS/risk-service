import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RiskListComponent } from './risk-list.component';
import { TableComponent } from './table/table.component';
import { ChartsComponent } from './charts/charts.component';
import { SettingsComponent } from './settings/settings.component';
import { FormComponent } from './form/form.component';

const riskRoutes: Routes = [
    {
        path: 'risk-list',
        component: RiskListComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'table',
            },
            {
                path: 'table',
                pathMatch: 'full',
                component: FormComponent
            },
            {
                path: 'charts',
                pathMatch: 'full',
                component: ChartsComponent
            },
            {
                path: 'settings',
                pathMatch: 'full',
                component: SettingsComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(riskRoutes)],
    exports: [RouterModule]
})
export class RiskListRoutingModule { }
