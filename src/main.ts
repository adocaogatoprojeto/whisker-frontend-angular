import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import enviroment from './shared/enviroments/enviroment.local';
import { enableProdMode } from '@angular/core';

if (enviroment.production) {
  console.log('Production mode enabled');
  enableProdMode();
}

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
