import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:8080/api/product';

  constructor(private http: HttpClient) {
  }

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.url + '/' + id);
  }

  createProduct(product: Product): Observable<any> {
    console.log(product);
    return this.http.post(this.url, {
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
      promotion: product.promotion,
      category: product.category,
    });
  }

  editProduct(product: Product): Observable<any> {
    return this.http.put(this.url + '/' + product.id, {
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
      promotion: product.promotion,
      category: product.category
    });
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
