import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RiskListComponent } from './risk-list.component';
import { TableComponent } from './table/table.component';

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
                component: RiskListComponent
            },
            {
                path: 'charts',
                pathMatch: 'full',
                component: RiskListComponent
            },
            {
                path: 'theory',
                pathMatch: 'full',
                component: RiskListComponent
            },
            {
                path: 'settings',
                pathMatch: 'full',
                component: RiskListComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(riskRoutes)],
    exports: [RouterModule]
})
export class RiskListRoutingModule { }
