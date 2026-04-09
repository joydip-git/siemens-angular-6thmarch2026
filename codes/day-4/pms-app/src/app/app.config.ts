import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ProductService } from './products/services/product.service';
import { SERVICE_TOKEN, SERVICE_TYPE } from './config/constants';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    //ProductService
    {
      provide: SERVICE_TOKEN,
      useClass: SERVICE_TYPE
    }
  ]
};
