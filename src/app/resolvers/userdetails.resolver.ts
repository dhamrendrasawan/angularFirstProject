import { ResolveFn } from '@angular/router';
import { UsersService } from '../services/users.service';
import { inject } from '@angular/core';

export const userdetailsResolver: ResolveFn<any> = (route, state) => {
  const id = +route.params['id'];
  const userService = inject(UsersService)
  return userService.fetchUserDataById(id);
};
