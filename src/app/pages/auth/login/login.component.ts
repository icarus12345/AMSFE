import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '@app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
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

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  doLogin() {
    let data = this.loginFrm.value;
    console.log('doLogin', this.loginFrm.value,this.loginData)
    this.authService.login(data.email, data.password)
    // this.auth.login(this.loginFrm.controls.email.value, this.loginFrm.controls.password.value)
    //   // .pipe(first())
    //   .subscribe(
    //     data => {
    //       console.log(data, 'Login data')
    //       this.router.navigate([this.returnUrl]);
    //     },
    //     error => {
    //       console.log(error)
    //     }
    //   );
  }

}
