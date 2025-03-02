import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { MainComponent } from './components/main/main.component';
import { defineCustomElements } from 'sereni-ui/loader'

bootstrapApplication(MainComponent, appConfig)
  .catch((err) => console.error(err));
defineCustomElements(window)