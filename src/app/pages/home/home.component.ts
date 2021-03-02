import { Component, OnInit } from '@angular/core';
import { AuthService, CartService, DialogService } from '@app/services';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta,
    private authService: AuthService,
    private cartService: CartService,
    private dialog: DialogService
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Angular App');
    this.meta.addTags([
      { name: 'keywords', content: 'Angular, Universal, Example' },
      { name: 'description', content: 'Angular Universal Example' },
      { name: 'robots', content: 'index, follow' }
    ]);

    this.authService.authState
      .subscribe(
        user => {
          console.log('AuthStateChanged', user)
        }
      );
  }
  get isShowCart() {
    return this.cartService.show
  }

  alert() {
    this.dialog.alert({
      message: `You may only purchase one locker at any one time.`,
    });
  }

  warning() {
    this.dialog.warning({
      message: `You may only purchase one locker at any one time.`,
    });
  }

  error() {
    this.dialog.error({
      message: `You may only purchase one locker at any one time.`,
    });
  }

  confirm() {
    this.dialog.confirm({
      message: `You may only purchase one locker at any one time.?`,
    });
  }
}
