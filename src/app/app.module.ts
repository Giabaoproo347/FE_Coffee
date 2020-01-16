import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { authInterceptorProviders } from './user/_helpers/auth.interceptor';
import {LoginComponent} from './user/login/login.component';
import {RegisterComponent} from './user/register/register.component';
import {BoardAdminComponent} from './user/board-admin/board-admin.component';
import {ProfileComponent} from './user/profile/profile.component';
import {HomeComponent} from './user/home/home.component';
import {BoardModeratorComponent} from './user/board-moderator/board-moderator.component';
import {BoardUserComponent} from './user/board-user/board-user.component';
import { HomePageComponent } from './component/public/home-page/home-page.component';
import { AuthorListComponent } from './component/admin/author/author-list/author-list.component';
import { AuthorCreateComponent } from './component/admin/author/author-create/author-create.component';
import { AuthorEditComponent } from './component/admin/author/author-edit/author-edit.component';
import { AuthorDeleteComponent } from './component/admin/author/author-delete/author-delete.component';
import { AuthorDetailComponent } from './component/admin/author/author-detail/author-detail.component';
import { BookDetailComponent } from './component/admin/book/book-detail/book-detail.component';
import { CategoryListComponent } from './component/admin/category/category-list/category-list.component';
import { CategoryCreateComponent } from './component/admin/category/category-create/category-create.component';
import { CategoryEditComponent } from './component/admin/category/category-edit/category-edit.component';
import { CategoryDeleteComponent } from './component/admin/category/category-delete/category-delete.component';
import { CategoryDetailComponent } from './component/admin/category/category-detail/category-detail.component';
import { CommentListComponent } from './component/admin/comment/comment-list/comment-list.component';
import { CommentCreateComponent } from './component/admin/comment/comment-create/comment-create.component';
import { CommentEditComponent } from './component/admin/comment/comment-edit/comment-edit.component';
import { CommentDeleteComponent } from './component/admin/comment/comment-delete/comment-delete.component';
import { CommentDetailComponent } from './component/admin/comment/comment-detail/comment-detail.component';
import { LanguageListComponent } from './component/admin/language/language-list/language-list.component';
import { LanguageCreateComponent } from './component/admin/language/language-create/language-create.component';
import { LanguageEditComponent } from './component/admin/language/language-edit/language-edit.component';
import { LanguageDeleteComponent } from './component/admin/language/language-delete/language-delete.component';
import { LanguageDetailComponent } from './component/admin/language/language-detail/language-detail.component';
import { PublishingListComponent } from './component/admin/publishing/publishing-list/publishing-list.component';
import { PublishingCreateComponent } from './component/admin/publishing/publishing-create/publishing-create.component';
import { PublishingEditComponent } from './component/admin/publishing/publishing-edit/publishing-edit.component';
import { PublishingDeleteComponent } from './component/admin/publishing/publishing-delete/publishing-delete.component';
import { PublishingDetailComponent } from './component/admin/publishing/publishing-detail/publishing-detail.component';
import {BookDeleteComponent} from './component/admin/book/book-delete/book-delete.component';
import {BookEditComponent} from './component/admin/book/book-edit/book-edit.component';
import {BookCreateComponent} from './component/admin/book/book-create/book-create.component';
import {BookListComponent} from './component/admin/book/book-list/book-list.component';
import { BookPublicComponent } from './component/public/book-public/book-public.component';
import { BookHotComponent } from './component/public/book-hot/book-hot.component';
import { BookNewComponent } from './component/public/book-new/book-new.component';
import { CategoryDeteilComponent } from './components/admin/category/category-deteil/category-deteil.component';
import { OrderCreateComponent } from './components/admin/order/order-create/order-create.component';
import { OrderDeleteComponent } from './components/admin/order/order-delete/order-delete.component';
import { OrderDetailComponent } from './components/admin/order/order-detail/order-detail.component';
import { OrderEditComponent } from './components/admin/order/order-edit/order-edit.component';
import { OrderListComponent } from './components/admin/order/order-list/order-list.component';
import { OrderDetailCreateComponent } from './components/admin/orderDetail/order-detail-create/order-detail-create.component';
import { OrderDetailEditComponent } from './components/admin/orderDetail/order-detail-edit/order-detail-edit.component';
import { OrderDetailDeleteComponent } from './components/admin/orderDetail/order-detail-delete/order-detail-delete.component';
import { OrderDetailListComponent } from './components/admin/orderDetail/order-detail-list/order-detail-list.component';
import { OrderDetailDetailComponent } from './components/admin/orderDetail/order-detail-detail/order-detail-detail.component';
import { PaymentCreateComponent } from './components/admin/payment/payment-create/payment-create.component';
import { PaymentEditComponent } from './components/admin/payment/payment-edit/payment-edit.component';
import { PaymentDeleteComponent } from './components/admin/payment/payment-delete/payment-delete.component';
import { PaymentListComponent } from './components/admin/payment/payment-list/payment-list.component';
import { PaymentDetailComponent } from './components/admin/payment/payment-detail/payment-detail.component';
import { ProductListComponent } from './components/admin/product/product-list/product-list.component';
import { ProductEditComponent } from './components/admin/product/product-edit/product-edit.component';
import { ProductDetailComponent } from './components/admin/product/product-detail/product-detail.component';
import { ProductDeleteComponent } from './components/admin/product/product-delete/product-delete.component';
import { ProductCreateComponent } from './components/admin/product/product-create/product-create.component';
import { PromotionCreateComponent } from './components/admin/promotion/promotion-create/promotion-create.component';
import { PromotionEditComponent } from './components/admin/promotion/promotion-edit/promotion-edit.component';
import { PromotionDeleteComponent } from './components/admin/promotion/promotion-delete/promotion-delete.component';
import { PromotionListComponent } from './components/admin/promotion/promotion-list/promotion-list.component';
import { PromotionDetailComponent } from './components/admin/promotion/promotion-detail/promotion-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardModeratorComponent,
    ProfileComponent,
    HomePageComponent,
    AuthorListComponent,
    AuthorCreateComponent,
    AuthorEditComponent,
    AuthorDeleteComponent,
    AuthorDetailComponent,
    BookDetailComponent,
    BookDeleteComponent,
    BookEditComponent,
    BookCreateComponent,
    BookListComponent,
    CategoryListComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    CategoryDeleteComponent,
    CategoryDetailComponent,
    CommentListComponent,
    CommentCreateComponent,
    CommentEditComponent,
    CommentDeleteComponent,
    CommentDetailComponent,
    LanguageListComponent,
    LanguageCreateComponent,
    LanguageEditComponent,
    LanguageDeleteComponent,
    LanguageDetailComponent,
    PublishingListComponent,
    PublishingCreateComponent,
    PublishingEditComponent,
    PublishingDeleteComponent,
    PublishingDetailComponent,
    BookPublicComponent,
    BookHotComponent,
    BookNewComponent,
    // CategoryAddComponent,
    CategoryDeteilComponent,
    OrderCreateComponent,
    OrderDeleteComponent,
    OrderDetailComponent,
    OrderEditComponent,
    OrderListComponent,
    OrderDetailCreateComponent,
    OrderDetailEditComponent,
    OrderDetailDeleteComponent,
    OrderDetailListComponent,
    OrderDetailDetailComponent,
    PaymentCreateComponent,
    PaymentEditComponent,
    PaymentDeleteComponent,
    PaymentListComponent,
    PaymentDetailComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductDetailComponent,
    ProductDeleteComponent,
    ProductCreateComponent,
    PromotionCreateComponent,
    PromotionEditComponent,
    PromotionDeleteComponent,
    PromotionListComponent,
    PromotionDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
