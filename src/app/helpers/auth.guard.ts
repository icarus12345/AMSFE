import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { map, retry, first, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AuthService } from '@app/services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private _router: Router,
        private _authService: AuthService
    ) {
        console.log('AuthGuard::Init')
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('AuthGuard::canActivate')
        // Check token && redirect to login

        // Check user info.
        return this._authService.getInfo()
            .pipe(
                map(res => {
                    return (!!res && !!res.user) || !!this._router.navigate(['forbidden'])
                }),
                catchError((err:any) => {
                    this._router.navigate(['forbidden']);
                    console.log('AuthGuard::catchError')
                    return of(false)
                })
            );
    }
}