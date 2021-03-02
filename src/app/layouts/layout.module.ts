import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '@app/modules/material.module';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CategoryNavComponent } from './header/category-nav/category-nav.component';
import { NewsNotificationComponent } from './header/news-notification/news-notification.component';
import { FavoriteNotificationComponent } from './header/favorite-notification/favorite-notification.component';
import { SearchControlComponent } from './header/search-control/search-control.component';
import { SharedModule } from '@app/components/shared.module';
import { AccountMenuComponent } from './header/account-menu/account-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UserSidebarComponent } from './user-layout/user-sidebar/user-sidebar.component';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { ProductLayoutComponent } from './product-layout/product-layout.component';
import { FilterSidebarComponent } from './product-layout/filter-sidebar/filter-sidebar.component';


@NgModule({
    declarations: [
        DefaultLayoutComponent,
        BasicLayoutComponent,
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        CategoryNavComponent,
        NewsNotificationComponent,
        FavoriteNotificationComponent,
        SearchControlComponent,
        AccountMenuComponent,
        UserLayoutComponent,
        UserSidebarComponent,
        ProductLayoutComponent,
        FilterSidebarComponent,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        AngularMaterialModule,
        DefaultLayoutComponent,
        BasicLayoutComponent,
        UserLayoutComponent
    ],
    imports: [
        RouterModule,
        BrowserModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        MalihuScrollbarModule.forRoot()
    ]
})
export class LayoutModule { }
