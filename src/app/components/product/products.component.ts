import { Component } from '@angular/core';
import * as data from './products.json';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,NgxPaginationModule,FormsModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products = (data as any).default;
  p:any=1;
  seachText:any;
  sortProductAsc()
  {
    this.products = this.products.sort((a:any, b:any) => a.price-b.price);
  }

  sortProductDesc()
  {
    this.products = this.products.sort((a:any, b:any) =>b.price- a.price);
  }

}
