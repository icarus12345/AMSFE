import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '@app/services';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { LoginFormComponent } from '@app/components/login-form/login-form.component';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.sass']
})
export class RegisterFormComponent implements OnInit {
  Loading:boolean = false
  registerData: any = {
    email:'',
    password: ''
  }
  registerFrm: FormGroup = new FormGroup({
    // $key: new FormControl(null),
    email: new FormControl(this.registerData.email, [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(this.registerData.password, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),

    ])
  });
  constructor(
    public dialogRef: MatDialogRef<RegisterFormComponent>,
    private authService:AuthService,
    public dialog: MatDialog  
    ) { }

  ngOnInit(): void {
  }
  doRegister() {
    let data = this.registerFrm.value;
    console.log('doLogin', this.registerFrm.value,this.registerData)
    this.Loading = true;
    // this.authService.login(data.email, data.password)
    //   .subscribe(
    //     data => {
    //       this.Loading = false;
    //       this.dialogRef.close()
    //     },
    //     error => {
    //       console.log(error)
    //     }
    //   );
  }
  
  showLogin(){
    this.dialogRef.close()
    this.dialog.open(LoginFormComponent);
  }
}
