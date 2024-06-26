import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) { }

  fetchProducts() {
    return this.httpClient.get('https://fakestoreapi.com/products');
   // return this.httpClient.get('http://localhost:3000/employees');
  }
  
}
