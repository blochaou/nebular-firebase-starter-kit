import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class HTTPInterceptor implements HttpInterceptor {
  constructor(public afAuth: AngularFireAuth) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return this.afAuth.idToken.pipe(
      mergeMap(token => {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });

        return next.handle(request);
      }),
    );
  }
}
