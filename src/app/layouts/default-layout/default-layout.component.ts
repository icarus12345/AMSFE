import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.sass']
})
export class DefaultLayoutComponent implements OnInit {
  @ViewChild('drawer') drawer: MatDrawer | undefined;
  items: any[] = [
    {
      name: 'Product 001',
      icon: 'card_giftcard',
      updated: new Date('2/20/16'),
      qty: 1
    },
    {
      name: 'Product 002',
      icon: 'campaign',
      updated: new Date('1/18/16'),
      qty: 2
    },
    {
      name: 'Product 003',
      icon: 'new_releases',
      updated: new Date('1/18/16'),
      qty: 3
    },
    {
      name: 'Product 001',
      icon: 'card_giftcard',
      updated: new Date('2/20/16'),
      qty: 1
    },
    {
      name: 'Product 002',
      icon: 'campaign',
      updated: new Date('1/18/16'),
      qty: 2
    },
    {
      name: 'Product 003',
      icon: 'new_releases',
      updated: new Date('1/18/16'),
      qty: 3
    },
    {
      name: 'Product 001',
      icon: 'card_giftcard',
      updated: new Date('2/20/16'),
      qty: 1
    },
    {
      name: 'Product 002',
      icon: 'campaign',
      updated: new Date('1/18/16'),
      qty: 2
    },
    {
      name: 'Product 003',
      icon: 'new_releases',
      updated: new Date('1/18/16'),
      qty: 3
    },
    {
      name: 'Product 001',
      icon: 'card_giftcard',
      updated: new Date('2/20/16'),
      qty: 1
    },
    {
      name: 'Product 002',
      icon: 'campaign',
      updated: new Date('1/18/16'),
      qty: 2
    },
    {
      name: 'Product 003',
      icon: 'new_releases',
      updated: new Date('1/18/16'),
      qty: 3
    }
  ];
  constructor(
    
  ) { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    if(this.drawer) this.drawer.openedStart.subscribe(() => { console.log('Open Start') });
    else alert(0)
  }
  onOpenedChange(status:any){
    console.log('status', status)
  }
}
