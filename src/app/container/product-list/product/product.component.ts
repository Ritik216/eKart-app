import { Component, Input, OnInit } from '@angular/core';

export interface Product {
  id: number;
  title: string;
  price:number
  description:string,
  category: string;
  image: string;
  rating: {
    rate: number;
    count:number
  };
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  // @Input() product!: Product;
  @Input()
  product!:{
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: {
      rate: number;
      count:number
    };
    title: string;
  };
}
