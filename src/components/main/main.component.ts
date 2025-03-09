import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent, LogoComponent } from '../shared';




@Component({
  selector: 'app-main',
  imports: [RouterModule, NavComponent, LogoComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  standalone: true,
})
export class MainComponent {

}
