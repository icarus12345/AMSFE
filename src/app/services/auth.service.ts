import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, retry, first, finalize, share } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { User } from '@app/models'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authSubject: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined);
  authState: Observable<User | undefined> = this.authSubject.asObservable();
  public getInfo$: Observable<any> | undefined

  constructor(
    private http: HttpClient,
    public dialog: MatDialog
  ) {
    console.log("AuthService::Init")
    // check token
    // load auth data
  }

  onAuthStateChanged(nextOrObserver: Observer<any> | ((user: any | null) => any)) {

  }

  login(email: string, password: string) {
    console.log('AuthService::login')
    let observable = this.http.post<any>(`${environment.API_URL}/authenticate`, { email, password })
      .pipe(
        first(),
        // retry(3),
        map(res => {
          console.log(res, 'res')
          if (res.status) {

            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('TOKEN', res.data.token);
            // load auth data
            this.getInfo()
            return res.data;
          } else {
            console.log(res.message)
          }
        }),
        share()
      )
    observable.subscribe(
      data => {
        console.log('subscribe', data)
      },
      error => {
        console.log(error)
      }
    );
    observable.subscribe(
      data => {
        console.log('subscribe111', data)
      },
      error => {
        console.log(error)
      }
    );
    return observable;
  }

  getInfo() {
    const observable = this.http.post<any>(`${environment.API_URL}/auth/me`, null)
      .pipe(
        // first(),
        finalize(() => { console.log('finalize2') }),
        // retry(3),
        map(res => {
          console.log(res, 'res')
          if (res.status) {
            return res.data;
          } else {
            console.log(res.message)
          }
        }),
        share()
      )


    observable.subscribe(
      data => {
        console.log('subscribe', data)
        this.authSubject.next(data.user);
      },
      error => {
        console.log(error)
      }
    );
    return observable;
  }

  logout() {
    this.authSubject.next(undefined);
  }
}
