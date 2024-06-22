import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  console.log('I am token interceptor')
  // const myToken = localStorage.getItem('myToken');
  const myToken = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAA';
  const isLoggedIn = true;

  if (isLoggedIn) {
    const updatedReq = req.clone({
      setHeaders: {
        'MyTestHeader': `Bearer ${myToken}`
      }
    });
    return next(updatedReq);
  } else {
    return next(req);
  }
};
