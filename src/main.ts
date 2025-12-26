import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import enviroment from './shared/environments/environment.local';
import { enableProdMode } from '@angular/core';
import { App } from './app/app';

if (enviroment.production) {
  console.log('Production mode enabled');
  enableProdMode();
}

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
