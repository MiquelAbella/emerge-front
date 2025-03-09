import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
    private map!: L.Map;
    isOverlayShown = false

    private initMap(): void {
        this.map = L.map('map', {
            center: [40.416775, -3.703790], // Center on Madrid
            zoom: 6, 
            zoomControl: false,
        });

        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png?lang=es-ES', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19,
            minZoom: 6
        }).addTo(this.map);

        L.control.zoom({
            position: 'bottomright',
        }).addTo(this.map);
    }

    ngAfterViewInit(): void {
        this.initMap();
    }

    toggleOverlay() {
        this.isOverlayShown = !this.isOverlayShown
    }
}
