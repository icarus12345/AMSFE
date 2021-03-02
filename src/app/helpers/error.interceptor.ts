import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

// import { AuthenticationService } from '@app/services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        // private authenticationService: AuthenticationService
        ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.group('ErrorInterceptor');
        let obs = next.handle(request)
            .pipe(
                finalize(() => {
                    console.log('finalize');
                    console.groupEnd();
                }),
                catchError(err => {
                    console.log('catchError');
                    if (err.status === 401) {
                        // auto logout if 401 response returned from api
                        // this.authenticationService.logout();
                        
                    }
                    console.log('Error::',err)
                    const error = err.error.message || err.statusText;
                    return throwError(error);
                })
            )
        return obs;
    }
}