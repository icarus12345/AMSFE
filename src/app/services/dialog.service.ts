import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '@app/components/dialog/dialog.component';
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private dialog: MatDialog
  ) { }
  alert(config: any) {
    this.dialog.open(DialogComponent, {
      //   width: '250px',
      data: {
        type: 'alert',
        message: `You may only purchase one locker at any one time.`,
        ...config
      }
    });
  }
  warning(config: any) {
    this.dialog.open(DialogComponent, {
      //   width: '250px',
      data: {
        type: 'alert',
        title: 'Warning',
        message: `You may only purchase one locker at any one time.`,
        YesColor: 'accent',
        ...config
      }
    });
  }
  error(config: any) {
    this.dialog.open(DialogComponent, {
      //   width: '250px',
      data: {
        type: 'alert',
        title: 'Error',
        message: `You may only purchase one locker at any one time.`,
        YesColor: 'warn',
        ...config
      }
    });
  }
  confirm(config: any) {
    this.dialog.open(DialogComponent, {
      //   width: '250px',
      data: {
        type: 'confirm',
        title: 'Confirm',
        message: `You may only purchase one locker at any one time.`,
        YesText: 'OK',
        // YesColor: 'warn',
        ...config
      }
    });
  }
}
