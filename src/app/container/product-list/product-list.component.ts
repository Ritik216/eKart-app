import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:any[]=[];
  // clickCount:number=0;
  constructor() { }
  url="https://fakestoreapi.com/products";
  mensCount:number=0;
  womensCount:number=0;
  othersCount:number=0;
  allCount:number=0;
  ngOnInit(): void {
    fetch(this.url)
      .then(res=>res.json())
      .then(json=>{
        this.products = json;
        console.log(json)
        // for(let i=0;i<this.products.length;i++){
          
        // }
        this.products!.forEach((product) => {
          if(/women/.test(product.category))
            this.womensCount++;
          else if (/men/.test(product.category))
            this.mensCount++;
          else
            this.othersCount++;
        });
        this.allCount = this.mensCount + this.womensCount + this.othersCount;
      console.log(this.mensCount + " " + this.othersCount);  
      });
  }
  selectedFilterRadioButton:string = "all";
  onFilterChanged(val:string){
    this.selectedFilterRadioButton = val;
    console.log(this.selectedFilterRadioButton)
  }

  @Input()
  searchText:string='';
  // mensCount = this.products.forEach((product,index)=>{
  //     return 10;
  // })
  // for(let i=0;i<this.products.length;i++){
      
  // }
  // for( const product of products)
  // products.array.forEach(element => {
    
  // });

  // onHover(){
  //   if(this.clickCount==0){
  //     this.clickCount=1;
  //     console.log(this.clickCount)
  //   }
  //   else{
  //     this.clickCount=0;
  //     console.log(this.clickCount)
  //   }
  // }

  // ritik(){
  //   fetch(this.url)
  //     .then(res=>res.json())
  //     .then(json=>{
  //       this.products = json;
  //       console.log(json)});}
  // console.log(fetch)
}
