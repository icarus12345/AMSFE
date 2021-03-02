import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { auth } from '@app/mocks'

const mocks = [
    ...auth
];

@Injectable()
export class MockInterceptor implements HttpInterceptor {
    constructor(
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.group('MockInterceptor');
        const { url, method, headers, body, params } = request;
        console.log({ url, method, headers, body, params });
        // helper functions
        function param2Obj(url: string) {
            const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
            if (!search) {
                return {}
            }
            const obj: any = {}
            const searchArr = search.split('&')
            searchArr.forEach(v => {
                const index = v.indexOf('=')
                if (index !== -1) {
                    const name = v.substring(0, index)
                    const val = v.substring(index + 1, v.length)
                    obj[name] = val
                }
            })
            return obj
        }
        function ok(body?: any) {

            return of(new HttpResponse({
                status: 200,
                body
            }))
        }

        function error(message: string) {
            throw (new HttpErrorResponse({
                error: { a: 1 },
                status: 401,
                statusText: 'Unauthorised',
                url
            }));
            return throwError({ error: { message } });
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }

        function handleRoute() {

            for (const mock of mocks) {
                const reg = RegExp(mock.url)
                if (
                    reg.test(url) &&
                    mock.method.toLowerCase() == method.toLowerCase()
                ) {
                    return ok(mock.response({}))
                }
            }
            return next.handle(request);
        }
        // console.groupEnd();
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());

    }
}