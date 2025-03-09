import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-home',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @ViewChild('backgroundVideo') video!: ElementRef<HTMLVideoElement>;
  bands = [
    { name: "Vortex", city: "Bilbao" },
    { name: "Neón Blanco", city: "Sevilla" },
    { name: "Lágrimas de Acero", city: "Barcelona" },
    { name: "La Inquietud", city: "Madrid" },
    { name: "Cuerdas Rojas", city: "Valencia" },
    { name: "El Último Horizonte", city: "Granada" },
    { name: "Sombras al Sur", city: "Salamanca" },
    { name: "Furia en la Noche", city: "Zaragoza" },
    { name: "Amanecer Eterno", city: "Málaga" },
    { name: "Fuga de Cristal", city: "Toledo" },
    { name: "Bajo el Viento", city: "Cádiz" },
    { name: "La Marca del Sol", city: "Córdoba" },
    { name: "Escapatoria Ciega", city: "Alicante" },
    { name: "Cenizas del Alma", city: "Burgos" },
    { name: "Ecos en la Nebulosa", city: "La Coruña" },
    { name: "Gravedad", city: "León" },
    { name: "Distancia Cero", city: "Palma" },
    { name: "Fragmentos de Luz", city: "Lugo" },
    { name: "Pulsos", city: "Oviedo" },
    { name: "Voces Perdidas", city: "Murcia" }
  ]
  currentBand = this.bands[0];
  private currentIndex = 0;
  private subscription: Subscription = new Subscription();

  ngOnInit() {
    const bandChangeInterval = interval(5000);

    this.subscription = bandChangeInterval.subscribe(() => {
      this.currentIndex = Math.floor(Math.random() * this.bands.length - 1);
      this.currentBand = this.bands[this.currentIndex];
    });
  }

  ngAfterViewInit() {
    this.video.nativeElement.play().catch(error => {
      console.warn('Autoplay prevented:', error);
    });
  }

  ngOnDestroy() {
    // Limpiamos la suscripción cuando el componente se destruya
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onClick(e: Event) {
    console.log(e)
  }
}
