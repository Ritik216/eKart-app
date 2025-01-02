import { Component, ElementRef, OnInit, Input } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input()
  productListInput:ProductListComponent = undefined;
  product: Product;
  constructor() { }

  ngOnInit(): void {
    this.product = this.productListInput.selectedProduct;
  }
  
  // this.product = this.productListInput.selectedProduct;

}
