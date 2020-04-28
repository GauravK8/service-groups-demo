import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'service-groups',
        pathMatch: 'full'
    },
    {
        path: 'service-groups',
        loadChildren: () => import('./service-groups/service-groups.module').then(m => m.ServiceGroupsModule)
    },
];
