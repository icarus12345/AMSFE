import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { map, retry, first, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AuthService } from '@app/services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) {
        console.log('AuthGuard::Init')
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('AuthGuard::canActivate')
        return this.authService.getInfo()
            .pipe(
                map(res => {
                    console.log(res,'ressss')
                    return !!res
                }),
                catchError((err:any) => {
                    //this.router.navigate(['login']);
                    console.log('catchError')
                    return of(false)
                })
            );
    }
}