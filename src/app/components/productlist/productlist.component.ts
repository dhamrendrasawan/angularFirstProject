import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  products: any;
  isLoading: boolean = false;

  constructor(private productsService: ProductService) {
  }

  ngOnInit() {
      this.isLoading = true;
      this.productsService.fetchProducts().subscribe((response: any) => {
      this.products = response;
      this.isLoading = false;
    })
  }

}
