import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from '@app/modules/material.module';
import { LayoutModule } from '@app/layouts/layout.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor, MockInterceptor } from '@app/helpers';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicLayoutComponent } from './layouts/basic-layout/basic-layout.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '@app/components/shared.module';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { NotificationComponent } from './pages/user/notification/notification.component';
import { WishListComponent } from './pages/user/wish-list/wish-list.component';
import { PointsRewardsComponent } from './pages/user/points-rewards/points-rewards.component';
import { PurchasesReviewsComponent } from './pages/user/purchases-reviews/purchases-reviews.component';
import { MessageCentreComponent } from './pages/user/message-centre/message-centre.component';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { SearchComponent } from './pages/product/search/search.component';
import { ProductDetailComponent } from './pages/product/product-detail/product-detail.component';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { ForbiddenComponent } from './pages/errors/forbidden/forbidden.component';
import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  declarations: [
    AppComponent,
    // BasicLayoutComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    NotificationComponent,
    WishListComponent,
    PointsRewardsComponent,
    PurchasesReviewsComponent,
    MessageCentreComponent,
    ProductListComponent,
    SearchComponent,
    ProductDetailComponent,
    ForbiddenComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
    LayoutModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    OwlModule,
    MalihuScrollbarModule.forRoot()
  ],

  exports: [

  ],
  providers: [
    // { provide: DEFAULT_CURRENCY_CODE, useValue: "SGD" },
    // { provide: LOCALE_ID, useValue: "en-SG" },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
