import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/services';
import { MatDialog } from '@angular/material/dialog';
import { LoginFormComponent } from '@app/components/login-form/login-form.component';
import { YourCartComponent } from '@app/components/your-cart/your-cart.component';

import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-account-menu',
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.sass']
})
export class AccountMenuComponent implements OnInit {

  user: any = null;
  constructor(
    public authService:AuthService,
    public dialog: MatDialog,
    private _overlay: Overlay
  ) { }

  ngOnInit(): void {
    this.authService.observable
      .pipe(skip(1))
      .subscribe(
        (d) => {
          this.user = d.user
        }
      );
  }
  showLogin(){
    this.dialog.open(LoginFormComponent);
  }
  logout(){
    this.authService.logout()
  }
  showYourCart(){
    const scrollStrategy = this._overlay.scrollStrategies.block();
    let overlayRef:any = this._overlay.create({
      positionStrategy: this._overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically(),
      hasBackdrop: true,
      scrollStrategy,
      backdropClass:['cdk-overlay-dark-backdrop','your-cart-backdrop']
    })
    overlayRef.attach(new ComponentPortal(YourCartComponent))
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });
  }
}
