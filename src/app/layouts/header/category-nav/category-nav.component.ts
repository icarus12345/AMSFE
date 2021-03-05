import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '@app/services'
import { Subscription } from 'rxjs';
import { skip } from 'rxjs/operators';
@Component({
  selector: 'app-category-nav',
  templateUrl: './category-nav.component.html',
  styleUrls: ['./category-nav.component.scss']
})
export class CategoryNavComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription()
  categories: Array<any> = [];
  constructor(
    private appService:AppService
  ) { }

  ngOnInit(): void {
    this.subscription.add(
      this.appService.observable
        .pipe(skip(1))
        .subscribe(
          ({categories}) => {
            this.categories = categories
          },
          error => {
            console.log(error)
          }
        )
    )
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
