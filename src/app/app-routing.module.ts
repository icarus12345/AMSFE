import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { BasicLayoutComponent } from './layouts/basic-layout/basic-layout.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { ForbiddenComponent } from './pages/errors/forbidden/forbidden.component';

import { AuthResolver } from './resolvers/auth.resolver';
import { AuthGuard } from '@app/helpers'

import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { NotificationComponent } from './pages/user/notification/notification.component';
import { WishListComponent } from './pages/user/wish-list/wish-list.component';
import { PurchasesReviewsComponent } from './pages/user/purchases-reviews/purchases-reviews.component';
import { PointsRewardsComponent } from './pages/user/points-rewards/points-rewards.component';
import { MessageCentreComponent } from './pages/user/message-centre/message-centre.component';

import { ProductLayoutComponent } from './layouts/product-layout/product-layout.component';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { SearchComponent } from './pages/product/search/search.component';
import { ProductDetailComponent } from './pages/product/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: 'auth',
    component: BasicLayoutComponent,
    // canActivate: [GuestGuard],
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },

    ]

  },
  {
    path: '',
    component: DefaultLayoutComponent,
    
    children: [
      {
        path: '',
        component: HomeComponent,
        data: {
        }
      },
      // User router
      {
        path: 'user',
        component: UserLayoutComponent,
        canActivate: [AuthGuard],
        resolve: {
          user: AuthResolver
        },
        children: [
          {
            path: '',
            redirectTo: "profile",
            pathMatch: "full"
          },
          {
            path: 'profile',
            component: ProfileComponent,
            data: {
              showRecomment: true
            }
          },
          {
            path: 'notification',
            component: NotificationComponent,
            data: {
            }
          },
          {
            path: 'wish-list',
            component: WishListComponent,
            data: {
            }
          },
          {
            path: 'purchases-reviews',
            component: PurchasesReviewsComponent,
            data: {
            }
          },
          {
            path: 'points-rewards',
            component: PointsRewardsComponent,
            data: {
            }
          },
          {
            path: 'message-centre',
            component: MessageCentreComponent,
            data: {
            }
          },
        ]
    
      },
      // Product router
      {
        path: 'product',
        // matcher: (url) => {
        //   const regex = new RegExp(/(product|categories)/)
        //   console.log(url,'URL')
        //   if (url.length === 1 && url[0].path.match(/^(product|category)/)) {
        //     return {
        //       consumed: url,
              
        //     };
        //   }
        //   return null;
        // },
        component: ProductLayoutComponent,
        resolve: {
        },
        children: [
          {
            path: '',
            component: ProductListComponent,
            data: {
              hideFilterBar: true
            } 
          },
          {
            path: 'aaa',
            component: ProductListComponent,
            data: {
              hideFilterBar: true
            }
          },
          {
            path: 'search',
            component: SearchComponent,
            data: {
            }
          },
          {
            path: 'detail/:id',
            component: ProductDetailComponent,
            data: {
            }
          },
        ]
    
      },
    ]

  },
  {
    "path": "not-found",
    "component": NotFoundComponent
  },
  {
    path: "forbidden",
    "component": ForbiddenComponent
  },
  {
    path: "**",
    redirectTo: "not-found",
    pathMatch: "full"
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: [
    // BasicLayoutComponent,
    // DefaultLayoutComponent,
    // RegisterComponent,
    // LoginComponent,
    // HomeComponent, 
    // NotFoundComponent
  ]
})
export class AppRoutingModule { }
