import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { MAIN_ROUTES_ENUM } from '../entities/main-routes.enum';
import { CommonModule } from '@angular/common';

const routes = [
    { path: MAIN_ROUTES_ENUM.MAP, icon: 'fa-location-dot', tooltipText: 'Mapa' },
    { path: MAIN_ROUTES_ENUM.PUBLISHES, icon: 'fa-compact-disc', tooltipText: 'Publicaciones' },
    { path: MAIN_ROUTES_ENUM.CONCERT_HALLS, icon: 'fa-house-crack', tooltipText: 'Salas' },
    { path: MAIN_ROUTES_ENUM.CONCERTS, icon: 'fa-music', tooltipText: 'Conciertos' },
    { path: MAIN_ROUTES_ENUM.USERS, icon: 'fa-users', tooltipText: 'Usuarios' },
    { path: MAIN_ROUTES_ENUM.BANDS, icon: 'fa-podcast', tooltipText: 'Bandas' },
    { path: MAIN_ROUTES_ENUM.PROFILE, icon: 'fa-user', tooltipText: 'Perfil' },
]
@Component({
    selector: 'app-nav',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [CommonModule],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss'
})
export class NavComponent {
    MainRoutesEnum = MAIN_ROUTES_ENUM
    routes = routes
    constructor(private router: Router) {

    }
    navigate(route: MAIN_ROUTES_ENUM) {
        this.router.navigate([route])
    }
}
