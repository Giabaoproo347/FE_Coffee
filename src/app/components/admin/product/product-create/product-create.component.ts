import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../../../component/admin/category/category.service';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../../../user/_services/token-storage.service';
import {AppComponent} from '../../../../app.component';
import {Product} from '../../../../model/product.model';
import {ProductService} from '../../../../service/product.service';
import {PromotionService} from '../../../../service/promotion.service';
import {ProductPictureService} from '../../../../service/productPicture.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm: FormGroup;
  useFile: any[];
  product: Product;
  promotionList: any;
  promotion: any;
  categoryList: any;
  category: any;
  previewUrl: any[];
  message = false;
  productPictures: any[];

  constructor(
    private productService: ProductService,
    private promotionService: PromotionService,
    private categoryService: CategoryService,
    private productPictureService: ProductPictureService,
    private fb: FormBuilder,
    private router: Router,
    private token: TokenStorageService,
    private app: AppComponent
  ) {
  }

  ngOnInit() {
    if (!this.token.getToken()) {
      this.router.navigate(['/login']);
    }
    this.app.setIsShow(true);
    this.productForm = this.fb.group({
      id: '',
      name: ['', [Validators.required, Validators.minLength(1)]],
      price: ['', [Validators.required, Validators.min(0)]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required, Validators.min(0)]],
      categories: [''],
      promotion: [''],
    });
    this.promotionService.getPromotionList().subscribe(next => this.promotionList = next);
    this.categoryService.getCategoryList().subscribe(next => this.categoryList = next);
    this.useFile = [];
    this.previewUrl = [];
    this.productPictures = [];
    this.category = [];
    this.promotion = [];
  }

  onSubmit() {
    if (this.productForm.valid) {
      const {value} = this.productForm;
      this.product = value;
      for (const preview of this.previewUrl) {
        this.productPictureService.createProductPicture(preview).subscribe(
          next => {
            this.productPictures.push({
              id: next
            });
          }
        );
      }
    } else {
      console.log('error');
    }
    setTimeout(() => {
      this.createProduct();
    }, 1000);
  }

  onSelectFile(event) {
    this.useFile = [];
    this.useFile = event.srcElement.files;
    console.log(this.useFile);
    this.preview();
  }

  createProduct() {
    this.product.productPicture = this.productPictures;
    this.product.promotion = this.promotion;
    this.product.category = this.category;
    this.productService.createProduct(this.product).subscribe(next => {
      this.ngOnInit();
      this.message = true;
    });
  }

  preview() {
    // Show preview
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.useFile.length; i++) {
      const mimeType = this.useFile[i].type;
      if (mimeType.match(/image\/*/) == null) {
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(this.useFile[i]);
      reader.onload = event => {
        if (typeof reader.result === 'string') {
          this.previewUrl[i] = reader.result;
        }
      };
    }
    console.log(this.previewUrl);
  }

  addPromotion(id) {
    this.promotionService.getPromotion(id).subscribe(next => this.promotion = next);
  }


  addCategory(id) {
    this.categoryService.getCategory(id).subscribe(next => this.category = next);
  }

}
