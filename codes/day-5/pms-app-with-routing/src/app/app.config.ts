import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
//import { ProductService } from './products/services/product.service';
import { provideProductService, SERVICE_TOKEN, SERVICE_TYPE } from './config/constants';

import { HTTP_INTERCEPTORS, HttpFeature, provideHttpClient, withInterceptors } from '@angular/common/http';
import { TokenInterceptorService } from './shared/services/interceptors/token-interceptor-service';

//withInterceptors: Adds one or more functional-style HTTP interceptors to the configuration of the HttpClient instance.
const interptorChain = withInterceptors([TokenInterceptorService])

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    //ProductService
    provideProductService(),
    provideHttpClient(interptorChain),
    
    //if the interceptor is class type
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptorService,
    //   multi:true
    // }
  ]
};
