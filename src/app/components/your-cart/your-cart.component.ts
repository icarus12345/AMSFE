import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService, AuthService } from '@app/services'
import { Subscription } from 'rxjs';
import { Product, CartItem } from '@app/models/product'
@Component({
  selector: 'app-your-cart',
  templateUrl: './your-cart.component.html',
  styleUrls: ['./your-cart.component.sass'],
  animations: []
})
export class YourCartComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription()
  items: CartItem[]  = []
  
  constructor(
    private _authService:AuthService,
    private _cartService:CartService
  ) { 
    console.log('YourCartComponent::Init')
  }

  ngOnInit(): void {
    this.subscription.add(
      this._cartService.observable.subscribe(
        ({items}) => {
          this.items = items
          console.log('YourCartComponent',this.items)
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

  increase(item:any){
    if(item.quantity<item.product.in_stock) item.quantity++
  }

  decrease(item:any){
    if(item.quantity>0) item.quantity--
  }
}
