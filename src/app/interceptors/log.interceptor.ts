import { HttpInterceptorFn } from '@angular/common/http';

export const logInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('I am Log interceptor');
  console.log(req);
  return next(req);
};
