import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { MAIN_ROUTES_ENUM } from '../entities/main-routes.enum';

@Component({
    selector: 'app-nav',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss'
})
export class NavComponent {
    MainRoutesEnum = MAIN_ROUTES_ENUM

    constructor(private router: Router) {

    }
    navigate(route: MAIN_ROUTES_ENUM) {
        this.router.navigate([route])
    }
}
