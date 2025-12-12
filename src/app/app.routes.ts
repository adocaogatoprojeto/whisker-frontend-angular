import { Routes } from '@angular/router';
import { Auth } from './auth/auth';
import { Dashboard } from './dashboard/dashboard';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: 'auth',
        component: Auth
    },
    {
        path: 'dashboard',
        component: Dashboard,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: 'auth',
    }
];
