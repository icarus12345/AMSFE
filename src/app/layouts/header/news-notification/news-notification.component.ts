import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-notification',
  templateUrl: './news-notification.component.html',
  styleUrls: ['./news-notification.component.scss']
})
export class NewsNotificationComponent implements OnInit {
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
