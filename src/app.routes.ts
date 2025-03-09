import { Routes } from '@angular/router';
import { ConcertHallsComponent } from './components/pages/concert-halls/concert-halls.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/pages/home/home.component').then((c) => c.HomeComponent)
    },
    {
        path: 'bands',
        loadComponent: () => import('./components/pages/bands/bands.component').then((c) => c.BandsComponent)
    },
    {
        path: 'map',
        loadComponent: () => import('./components/pages/map/map.component').then((c) => c.MapComponent)
    },
    {
        path: 'publishes',
        loadComponent: () => import('./components/pages/publishes/publishes.component').then((c) => c.PublishesComponent)
    },
    {
        path: 'concerts',
        loadComponent: () => import('./components/pages/concerts/concerts.component').then((c) => c.ConcertsComponent)
    },
    {
        path: 'concert-halls',
        loadComponent: () => import('./components/pages/concert-halls/concert-halls.component').then((c) => ConcertHallsComponent)
    },
    {
        path: 'users',
        loadComponent: () => import('./components/pages/users/users.component').then((c) => c.UsersComponent)
    },
    {
        path: 'profile',
        loadComponent: () => import('./components/pages/profile/profile.component').then((c) => c.ProfileComponent)
    },
];
