import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthService } from '@app/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-layout',
  templateUrl: './product-layout.component.html',
  styleUrls: ['./product-layout.component.sass']
})
export class ProductLayoutComponent implements OnInit {
  subscription: Subscription = new Subscription()

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {
    this.subscription.add(
      router.events.subscribe((val) => {
        var snapshot = this.route.snapshot;
        if (val instanceof NavigationEnd) {
          console.log(snapshot.params, 'snapshot.params')
          console.log(snapshot.data, 'snapshot.data')
          console.log(route.snapshot.firstChild?.data);
        }
      })
    );
   }

  ngOnInit(): void {
  }

}
