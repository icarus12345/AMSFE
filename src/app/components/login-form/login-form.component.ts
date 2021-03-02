import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '@app/services';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { RegisterFormComponent } from '@app/components/register-form/register-form.component';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {
  Loading:boolean = false
  loginData: any = {
    email:'',
    password: ''
  }
  loginFrm: FormGroup = new FormGroup({
    // $key: new FormControl(null),
    email: new FormControl(this.loginData.email, [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(this.loginData.password, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),

    ])
  });
  constructor(
    public dialogRef: MatDialogRef<LoginFormComponent>,
    private authService:AuthService,
    public dialog: MatDialog  
    ) { }

  ngOnInit(): void {
  }
  doLogin() {
    let data = this.loginFrm.value;
    console.log('doLogin', this.loginFrm.value,this.loginData)
    this.Loading = true;
    this.authService.login(data.email, data.password)
      .subscribe(
        data => {
          this.Loading = false;
          this.dialogRef.close()
        },
        error => {
          console.log(error)
        }
      );
  }
  
  showRegister(){
    this.dialogRef.close()
    this.dialog.open(RegisterFormComponent);
  }
}
