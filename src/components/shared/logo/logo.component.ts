import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-logo',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './logo.component.html',
    styleUrl: './logo.component.scss'
})
export class LogoComponent {
    constructor(private router: Router){}

    navigate() {
        this.router.navigate([''])
    }
}
