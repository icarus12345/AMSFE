import { Component, OnInit } from '@angular/core';
import { AuthService, CartService } from '@app/services';
import { MatDialog } from '@angular/material/dialog';
import { LoginFormComponent } from '@app/components/login-form/login-form.component';
import { MatBottomSheet, MatBottomSheetConfig } from '@angular/material/bottom-sheet';
import { YourCartComponent } from '@app/components/your-cart/your-cart.component';

@Component({
  selector: 'app-account-menu',
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.sass']
})
export class AccountMenuComponent implements OnInit {

  user: any = null;
  constructor(
    public cartService:CartService,
    public authService:AuthService,
    public dialog: MatDialog,
    private _bottomSheet: MatBottomSheet
  ) { }

  ngOnInit(): void {
    this.authService.authState
      .subscribe(
        user => {
          this.user = user
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
    const config: MatBottomSheetConfig = {
      
     };
    this._bottomSheet.open(YourCartComponent, config);
  }
}
