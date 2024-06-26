import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { logInterceptor } from './interceptors/log.interceptor';
import { retryInterceptor } from './interceptors/retry.interceptor';
import { tokenInterceptorInterceptor } from './interceptors/token-interceptor.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([logInterceptor, retryInterceptor,
      tokenInterceptorInterceptor

    ]))]
};
