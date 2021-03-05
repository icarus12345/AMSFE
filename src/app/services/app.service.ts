import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, retry, first, finalize, share, skip } from 'rxjs/operators';
import { environment } from '@environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  private subject = new BehaviorSubject<any>(null);
  observable = this.subject.asObservable()
  show:boolean = false

  constructor(
    private http: HttpClient,
    // public dialog: MatDialog  
  ) { 
    console.log("AppService::Init")
    this.load()
  }

  load() {
    const observable = this.http.get<any>(`${environment.API_URL}/app-info`)
      .pipe(
        // first(),
        finalize(() => {  }),
        // retry(3),
        map(res => {
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
        this.subject.next(data);
      },
      error => {
        console.log(error)
      }
    );
    return observable;
  }

  getProductList(){
    const observable = this.http.get<any>(`${environment.API_URL}/product`)
      .pipe(
        // first(),
        finalize(() => {  }),
        // retry(3),
        map(res => {
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
      },
      error => {
        console.log(error)
      }
    );
    return observable;
  }
}
