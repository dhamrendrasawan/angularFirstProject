import { HttpInterceptorFn } from '@angular/common/http';
import { retry } from 'rxjs';

export const retryInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('I am ReTry Interceptor');
  return next(req).pipe(retry(1));
};
