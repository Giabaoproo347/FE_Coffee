import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../user/home/home.component';
import {RegisterComponent} from '../user/register/register.component';
import {BoardUserComponent} from '../user/board-user/board-user.component';
import {BoardModeratorComponent} from '../user/board-moderator/board-moderator.component';
import {ProfileComponent} from '../user/profile/profile.component';
import {LoginComponent} from '../user/login/login.component';
import {BoardAdminComponent} from '../user/board-admin/board-admin.component';
import {HomePageComponent} from '../component/public/home-page/home-page.component';
import {BookListComponent} from '../component/admin/book/book-list/book-list.component';
import {BookCreateComponent} from '../component/admin/book/book-create/book-create.component';
import {BookEditComponent} from '../component/admin/book/book-edit/book-edit.component';
import {BookDeleteComponent} from '../component/admin/book/book-delete/book-delete.component';
import {BookDetailComponent} from '../component/admin/book/book-detail/book-detail.component';
import {AuthorListComponent} from '../component/admin/author/author-list/author-list.component';
import {AuthorCreateComponent} from '../component/admin/author/author-create/author-create.component';
import {AuthorEditComponent} from '../component/admin/author/author-edit/author-edit.component';
import {AuthorDeleteComponent} from '../component/admin/author/author-delete/author-delete.component';
import {AuthorDetailComponent} from '../component/admin/author/author-detail/author-detail.component';
import {CategoryListComponent} from '../component/admin/category/category-list/category-list.component';
import {CategoryCreateComponent} from '../component/admin/category/category-create/category-create.component';
import {CategoryEditComponent} from '../component/admin/category/category-edit/category-edit.component';
import {CategoryDeleteComponent} from '../component/admin/category/category-delete/category-delete.component';
import {CategoryDetailComponent} from '../component/admin/category/category-detail/category-detail.component';
import {CommentListComponent} from '../component/admin/comment/comment-list/comment-list.component';
import {CommentCreateComponent} from '../component/admin/comment/comment-create/comment-create.component';
import {CommentEditComponent} from '../component/admin/comment/comment-edit/comment-edit.component';
import {CommentDeleteComponent} from '../component/admin/comment/comment-delete/comment-delete.component';
import {CommentDetailComponent} from '../component/admin/comment/comment-detail/comment-detail.component';
import {LanguageListComponent} from '../component/admin/language/language-list/language-list.component';
import {LanguageCreateComponent} from '../component/admin/language/language-create/language-create.component';
import {LanguageEditComponent} from '../component/admin/language/language-edit/language-edit.component';
import {LanguageDeleteComponent} from '../component/admin/language/language-delete/language-delete.component';
import {LanguageDetailComponent} from '../component/admin/language/language-detail/language-detail.component';
import {PublishingListComponent} from '../component/admin/publishing/publishing-list/publishing-list.component';
import {PublishingCreateComponent} from '../component/admin/publishing/publishing-create/publishing-create.component';
import {PublishingEditComponent} from '../component/admin/publishing/publishing-edit/publishing-edit.component';
import {PublishingDeleteComponent} from '../component/admin/publishing/publishing-delete/publishing-delete.component';
import {PublishingDetailComponent} from '../component/admin/publishing/publishing-detail/publishing-detail.component';
import {BookPublicComponent} from '../component/public/book-public/book-public.component';
import {BookNewComponent} from '../component/public/book-new/book-new.component';
import {ProductListComponent} from '../components/admin/product/product-list/product-list.component';
import {ProductCreateComponent} from '../components/admin/product/product-create/product-create.component';
import {ProductEditComponent} from '../components/admin/product/product-edit/product-edit.component';
import {ProductDeleteComponent} from '../components/admin/product/product-delete/product-delete.component';
import {ProductDetailComponent} from '../components/admin/product/product-detail/product-detail.component';
import {PromotionListComponent} from '../components/admin/promotion/promotion-list/promotion-list.component';
import {PromotionCreateComponent} from '../components/admin/promotion/promotion-create/promotion-create.component';
import {PromotionEditComponent} from '../components/admin/promotion/promotion-edit/promotion-edit.component';
import {PromotionDeleteComponent} from '../components/admin/promotion/promotion-delete/promotion-delete.component';
import {PromotionDetailComponent} from '../components/admin/promotion/promotion-detail/promotion-detail.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'product/product-list', component: ProductListComponent },
  { path: 'product/product-create', component: ProductCreateComponent },
  { path: 'product/product-edit/:id', component: ProductEditComponent },
  { path: 'product/product-delete/:id', component: ProductDeleteComponent },
  { path: 'product/product-detail/:id', component: ProductDetailComponent },
  { path: 'promotion/promotion-list', component: PromotionListComponent },
  { path: 'promotion/promotion-create', component: PromotionCreateComponent },
  { path: 'promotion/promotion-edit/:id', component: PromotionEditComponent },
  { path: 'promotion/promotion-delete/:id', component: PromotionDeleteComponent },
  { path: 'promotion/promotion-detail/:id', component: PromotionDetailComponent },
  { path: 'category/category-list', component: CategoryListComponent },
  { path: 'category/category-create', component: CategoryCreateComponent },
  { path: 'category/category-edit/:id', component: CategoryEditComponent },
  { path: 'category/category-delete/:id', component: CategoryDeleteComponent },
  { path: 'category/category-detail/:id', component: CategoryDetailComponent },
  { path: 'book-public', component: BookPublicComponent },
  { path: 'book-new', component: BookNewComponent },
  { path: '', redirectTo: '/book-public', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
