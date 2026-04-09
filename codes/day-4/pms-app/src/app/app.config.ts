import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
//import { ProductService } from './products/services/product.service';
import { provideProductService, SERVICE_TOKEN, SERVICE_TYPE } from './config/constants';

import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    //ProductService
    provideProductService(),
    provideHttpClient()
  ]
};
