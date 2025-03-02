import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideComponent, LogoComponent } from '../shared';




@Component({
  selector: 'app-main',
  imports: [RouterModule, AsideComponent, LogoComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  standalone: true,
})
export class MainComponent {

}
