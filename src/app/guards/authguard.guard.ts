import { CanActivateFn } from '@angular/router';

export const authguardGuard: CanActivateFn = (route, state) => {
 // Inject user service, Read user info from user service
 const user = { name: 'sanjay', role: 'admin1' };
 if (user.role === 'admin') {
   return true;
 } else {
   alert('Sorry!!! You dont have access to this page')
   return false;
 }
};
