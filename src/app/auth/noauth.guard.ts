import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NoAuthGuard implements CanActivate {
  constructor(private afAuth: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.afAuth.isAuthenticated().pipe(
      map(logged => !logged),
      tap(notLogged => {
        console.log('is not logged: ', notLogged);
        if (!notLogged) {
          this.router.navigate(['/']);
        }
      }),
    );
  }
}
