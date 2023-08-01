import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const hasToken = !!localStorage.getItem('token')

  return hasToken
};
