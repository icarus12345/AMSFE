import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
@Component({
  selector: 'app-your-cart',
  templateUrl: './your-cart.component.html',
  styleUrls: ['./your-cart.component.scss'],
  animations: []
})
export class YourCartComponent implements OnInit {
  notes: any[] = [
    {
      name: 'You got a new voucher from Artkey !',
      icon: 'card_giftcard',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Lorem Ipsum is simply dummy text of the...',
      icon: 'campaign',
      updated: new Date('1/18/16'),
    },
    {
      name: 'Lorem Ipsum is simply dummy text of the...',
      icon: 'new_releases',
      updated: new Date('1/18/16'),
    }
  ];
  constructor(private _bottomSheetRef: MatBottomSheetRef<YourCartComponent>) { }

  ngOnInit(): void {
  }

}
