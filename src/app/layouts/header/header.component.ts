import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/services';
import { MatDialog } from '@angular/material/dialog';
import { skip } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  user: any = null;
  constructor(
    public authService:AuthService,
    public dialog: MatDialog  
  ) { }

  ngOnInit(): void {
    this.authService.observable
      .pipe(skip(1))
      .subscribe(
        user => {
          console.log('AuthChange')
          this.user = user
        }
      );
  }
  
}
