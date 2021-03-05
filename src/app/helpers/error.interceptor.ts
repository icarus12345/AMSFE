import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { DialogService } from '@app/services/dialog.service'
// import { AuthenticationService } from '@app/services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        // private _authenticationService: AuthenticationService
        private _dialogService: DialogService
        ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.group('ErrorInterceptor');
        let obs = next.handle(request)
            .pipe(
                finalize(() => {
                    console.log('finalize');
                    console.groupEnd();
                }),
                catchError(httpErrorResponse => {
                    console.log('catchError');
                    if (httpErrorResponse.status === 401) {
                        // auto logout if 401 response returned from api
                        // this.authenticationService.logout();
                        
                    }else if(httpErrorResponse)
                    console.log('Error::',httpErrorResponse)
                    const title = httpErrorResponse.statusText;
                    const message = httpErrorResponse.message || httpErrorResponse.statusText;
                    this._dialogService.error({
                        title,
                        message
                    });
                    return throwError(httpErrorResponse);
                })
            )
        return obs;
    }
}