import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
    private map!: L.Map;
    isOverlayShown = false;
    private markerClusterGroup!: L.MarkerClusterGroup;


    private concertIcon = L.divIcon({
        className: 'custom-marker',
        html: '<i class="fas fa-music" style="color: white;"></i>',
        iconSize: [10, 10],
    });

    private bandIcon = L.divIcon({
        className: 'custom-marker',
        html: '<i class="fas fa-podcast" style="color: white;"></i>',
        iconSize: [10, 10],
    });

    private concertHallIcon = L.divIcon({
        className: 'custom-marker',
        html: '<i class="fas fa-house-crack" style="color: white;"></i>',
        iconSize: [10, 10],
    });

    private initMap(): void {
        this.map = L.map('map', {
            center: [40.416775, -3.703790], // Center on Madrid
            zoom: 6,
            zoomControl: false,
        });

        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png?lang=es-ES', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19,
            minZoom: 4

        }).addTo(this.map);

        L.control.zoom({
            position: 'bottomright',
        }).addTo(this.map);

        this.markerClusterGroup = L.markerClusterGroup({
            iconCreateFunction: (cluster) => {
                const count = cluster.getChildCount();
                return L.divIcon({
                    html: `<div style="background-color: white; border: 2px solid black; border-radius: 50%; width: 30px; height: 30px; display: flex; justify-content: center; align-items: center; font-size: 14px; color: black; font-family: "Inconsolata", serif;">${count}</div>`,
                    className: 'leaflet-cluster',
                    iconSize: L.point(40, 40),
                });
            },
            showCoverageOnHover: false
        });
        this.map.addLayer(this.markerClusterGroup);
        this.addMarkers();
    }

    private addMarkers(): void {
        const locations = [
            { name: 'Madrid', coords: [40.4168, -3.7038], icon: this.concertIcon },
            { name: 'Barcelona', coords: [41.3874, 2.1686], icon: this.bandIcon },
            { name: 'Valencia', coords: [39.4699, -0.3763], icon: this.concertHallIcon },
            { name: 'Seville', coords: [37.3886, -5.9823], icon: this.concertIcon },
            { name: 'A Coruña', coords: [43.3623, -8.4115], icon: this.bandIcon },
            { name: 'Malaga', coords: [36.7213, -4.4217], icon: this.concertHallIcon },
            { name: 'Palma', coords: [39.8628, 4.0209], icon: this.concertIcon },
            { name: 'Santiago de Compostela', coords: [42.8782, -8.5448], icon: this.bandIcon },
            { name: 'Alicante', coords: [38.3452, -0.4810], icon: this.concertHallIcon },
            { name: 'Bilbao', coords: [43.2630, -2.9350], icon: this.concertIcon },
            { name: 'Zaragoza', coords: [41.6488, -0.8891], icon: this.bandIcon },
            { name: 'Granada', coords: [37.1773, -3.5986], icon: this.concertHallIcon },
            { name: 'Salamanca', coords: [40.9640, -5.6635], icon: this.concertIcon },
            { name: 'Toledo', coords: [39.8628, -4.0273], icon: this.bandIcon },
            { name: 'San Sebastián', coords: [43.3183, -1.9812], icon: this.concertHallIcon },
            { name: 'Valladolid', coords: [41.6523, -4.7245], icon: this.concertIcon },
            { name: 'Badajoz', coords: [38.8794, -6.9707], icon: this.bandIcon },
            { name: 'Santa Cruz de Tenerife', coords: [28.4636, -16.2518], icon: this.concertHallIcon },
            { name: 'Oviedo', coords: [43.3603, -5.8448], icon: this.concertIcon },
            { name: 'Santander', coords: [43.4623, -3.8099], icon: this.bandIcon },
            { name: 'Burgos', coords: [42.3439, -3.6969], icon: this.concertHallIcon },
            { name: 'Almeria', coords: [36.8415, -2.4681], icon: this.concertIcon },
            { name: 'Cordoba', coords: [37.8882, -4.7794], icon: this.bandIcon },
            { name: 'Gijón', coords: [43.5322, -5.6611], icon: this.concertHallIcon },
            { name: 'Pamplona', coords: [42.8125, -1.6458], icon: this.concertIcon },
        ];

        const markers = locations.map(loc =>
            L.marker(loc.coords as L.LatLngExpression, { icon: loc.icon }).on('click', () => this.toggleOverlay())
        );

        this.markerClusterGroup.addLayers(markers);
    }

    ngAfterViewInit(): void {
        this.initMap();
    }

    toggleOverlay() {
        this.isOverlayShown = !this.isOverlayShown;
    }
}
