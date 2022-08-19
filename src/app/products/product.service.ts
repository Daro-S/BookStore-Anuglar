import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../site-layout/category';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  createProduct(productBody: any):Observable<Product>{
    const baseUrl = "http://localhost:3000/product";
    return this.httpClient.post<Product>(baseUrl,productBody);
  }
  viewProduct(category_id: any):Observable<Product>{
    const baseUrl = "http://localhost:3000/product/"+ category_id;
    return this.httpClient.get<Product>(baseUrl);
  }
  viewAllProduct():Observable<Product>{
    const baseUrl = "http://localhost:3000/product/";
    return this.httpClient.get<Product>(baseUrl);
  }
  updateProduct(productId: any, productBody: any):Observable<Product>{
    const baseUrl = "http://localhost:3000/product/"+ productId;
    return this.httpClient.put<Product>(baseUrl, productBody);
  }
  deleteProduct(productId: any):Observable<Product>{
    const baseUrl = "http://localhost:3000/product/"+ productId;
    return this.httpClient.delete<Product>(baseUrl);
  }
  searchCategoryProduct(category_id: any):Observable<Product>{
    const baseUrl = "http://localhost:3000/product/category="+ category_id;
    return this.httpClient.get<Product>(baseUrl);
  }
  searchDateProduct(dateParam: any):Observable<Product>{
    const baseUrl = "http://localhost:3000/product/date="+ dateParam;
    return this.httpClient.get<Product>(baseUrl);
  }
  getCategory(){
    const categoryUrl="http://localhost:3000/categories";
    return this.httpClient.get<Category>(categoryUrl);

  }
}
