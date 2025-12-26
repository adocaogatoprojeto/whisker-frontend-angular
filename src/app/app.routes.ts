import { Routes } from '@angular/router';
import { Auth } from './auth/auth';
import { Dashboard } from './dashboard/dashboard';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: 'auth',
        component: Auth
    },
    {
        path: 'dashboard',
        component: Dashboard,
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: 'auth',
    }
];
