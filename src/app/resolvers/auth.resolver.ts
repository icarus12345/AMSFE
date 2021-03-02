import { Injectable } from '@angular/core';
import { AuthService } from '@app/services';
import { map, retry, first, finalize, catchError } from 'rxjs/operators';

import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthResolver implements Resolve<Observable<any>> {
  constructor(private authService: AuthService, private router: Router) {
    console.log('AuthResolver::Init')
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    console.log('AuthResolver::resolve')
    // return this.authService.getInfo().pipe(
    //   map(res => {
    //     console.log(res,'ressss')
    //     return of(res)
    //   }),
    //   catchError(error => {
    //     return of(null);
    //   }
    // ));
    return of(this.authService.authState.subscribe(res=>res));
  }
}
