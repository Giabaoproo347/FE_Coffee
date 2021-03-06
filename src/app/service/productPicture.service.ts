import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductPicture} from '../model/productPicture.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProductPictureService {
  private url = 'http://localhost:8080/api/product-picture';

  constructor(private http: HttpClient) {
  }

  getProductPictureList(): Observable<ProductPicture[]> {
    return this.http.get<ProductPicture[]>(this.url);
  }

  getProductPicture(id: number): Observable<ProductPicture> {
    return this.http.get<ProductPicture>(this.url + '/' + id);
  }

  createProductPicture(preview): Observable<any> {
    console.log(preview);
    return this.http.post(this.url, {
      src: preview
    });
  }

  editProductPicture(productPicture: ProductPicture): Observable<any> {
    return this.http.put(this.url + '/' + productPicture.id, productPicture);
  }

  deleteProductPicture(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
