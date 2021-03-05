import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, retry, tap, finalize } from 'rxjs/operators';
// import { AuthenticationService } from '@app/services';
const Pending = 0;
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    public Pending: number = 0;
    constructor(
        // private _authenticationService: AuthenticationService
        ) { 

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.group('JwtInterceptor');
        // add authorization header with jwt token if available
        let token = '111';//this.authenticationService.token;
        // console.log(this.authenticationService.token,'this.authenticationService.token')
        request = request.clone({
            setHeaders: {
                "Content-Type":  `application/json`,
                'Access-Control-Allow-Origin': '*',
            }
        });
        if (token) {
            request = request.clone({
                setHeaders: {
                    "Authorization": `Bearer ${token}`,
                }
            });
        }
        this.Pending++;
        const started = Date.now();
        let ok: string;
        let obs = next.handle(request)
            .pipe(
                tap(
                    (res: HttpEvent<any>) => {
                        if (res instanceof HttpResponse && res.status === 200) {
                            let body = res.body
                            console.log("SUCCESS.", res);
                            if(body.code < 0) {
                                // console.log(body.message)
                            }
                        }
                        ok = res instanceof HttpResponse ? 'succeeded' : '';
                        // obs.source.unsubscribe();
                    },
                    (error: HttpErrorResponse) => {
                        ok = "failed";
                    }
                ),
                finalize(() => {
                    this.Pending--;
                    const elapsed = Date.now() - started;
                    const msg = `${request.method} "${request.urlWithParams}" ${ok} in ${elapsed} ms.`;
                    console.warn(msg);
                    console.groupEnd();
                })
            );
        // console.log(obs)
        
        return obs;
    }
}