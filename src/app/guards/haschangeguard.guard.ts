
import { CanDeactivateFn } from '@angular/router';

export const hasChangesGuard: CanDeactivateFn<unknown> =
  (component: any, currentRoute, currentState, nextState) => {
    if (component?.isDirty) {
      alert('Please save your changes before you leave this route');
      return false;
    } else {
      return true
    }
  };