import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';
import { AngularMaterialModule } from '@app/modules/material.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { YourCartComponent } from './your-cart/your-cart.component';
import { CountdownComponent } from './countdown/countdown.component';
import { CommentComponent } from './comment/comment.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    DialogComponent,
    LoginFormComponent,
    RegisterFormComponent,
    YourCartComponent,
    CountdownComponent,
    CommentComponent,
    ProductItemComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule,
    BrowserModule,
  ],
  exports: [
    LoginFormComponent,
    DialogComponent,
    RegisterFormComponent,
    ProductItemComponent,
    CartItemComponent,
    CountdownComponent
  ]
})
export class SharedModule { }
