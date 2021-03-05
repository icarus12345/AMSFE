import { Component, OnInit } from '@angular/core';
import { Product } from '@app/models';
import { AppService } from '@app/services'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  subscription: Subscription = new Subscription()
  items: Array<Product> = [];
  
  constructor(
    private appService:AppService
  ) { }

  ngOnInit(): void {
    this.subscription.add(
      this.appService.observable
        .subscribe(
          (data) => {
            console.log('Category', data)
          },
          error => {
            console.log(error)
          }
        )
    )

    this.appService.getProductList()
      .subscribe(
        ({items}) => {
          this.items = items
        },
        error => {
          console.log(error)
        }
      )
  }

}
