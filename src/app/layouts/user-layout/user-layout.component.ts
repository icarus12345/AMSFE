import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AuthService } from '@app/services'
import { AuthGuard } from '@app/helpers'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.sass']
})
export class UserLayoutComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription()
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private authGuard: AuthGuard,
  ) {
    // route.data.subscribe(data => {
    //   console.log('data', data)
    //   console.log(route.snapshot.firstChild?.data);


    // });
    
    // route.url.subscribe(() => {
    //   console.log(route.snapshot.firstChild?.data);
    // });
    this.subscription.add(
      router.events.subscribe((val) => {
        var snapshot = this.route.snapshot;
        if (val instanceof NavigationEnd) {
          // console.log(snapshot.params, 'snapshot.params')
          // console.log(snapshot.data, 'snapshot.data')
          // console.log(route.snapshot.firstChild?.data);
        }
      })
    );

  }

  ngOnInit(): void {
    console.log('UserLayoutComponent::ngOnInit',this.subscription)
    this.subscription.add(
      this.route.params.subscribe(
        params => {
          console.log('params', params)
          console.log('this.route.snapshot.data',this.route.snapshot.data,this.route.snapshot.data.user);
        }
      )
    );
    // this.authService.getInfo()
    // .subscribe(
    //   data => {
    //     console.log('subscribe1111', data)
    //   },
    //   error => {
    //     console.log(error)
    //   }
    // )
    this.subscription.add(
      this.authService.authState.subscribe(
        data => {
          console.log('subscribe22222', data)
          
          // this.authGuard.canActivate(
          //   this.route.snapshot,
          //   this.router.routerState.snapshot
          // );
        },
        error => {
          console.log(error)
        }
      )
    )
    this.subscription.add(
      this.authService.authState.subscribe(
        data => {
          console.log('subscribe33333', data)
        },
        error => {
          console.log(error)
        }
      )
    )
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
    this.subscription.unsubscribe();
    // this.subscription.map(s=>{s.unsubscribe()});
  }

}
