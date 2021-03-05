import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@app/models';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.sass']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product | undefined;
  SlideOptions = { 
    items: 1, dots: false, nav: true,
    lazyLoad: true
   };  
  thumbOptions = { 
    items: 5, 
    // autoWidth:true,
    dots: false, nav: false ,
    margin: 2,
    lazyLoad: true
  }; 
  constructor() { }

  ngOnInit(): void {
  }

}
