import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-notification',
  templateUrl: './favorite-notification.component.html',
  styleUrls: ['./favorite-notification.component.scss']
})
export class FavoriteNotificationComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}
