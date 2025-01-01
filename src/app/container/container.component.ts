import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // name="Sonal Khurana"

  addToCart:number=0;
  product={
    name: "Iphone 15",
    price: 999,
    color: "Aqua Blue",
    inStock: 10,
    discount: 10,
    pImage: '/assets/iphone15.jpeg'
  }
  onDiscount(){
    return this.product.price * (100 - this.product.discount)/100;
  }

  //Event Binding --> View Template to Component
  // onNameChange(event:any){
  //   this.name = event.target!.value;
  //   console.log(event)
  // }

  addToCartCount(num:any){
    if(num==0)
      this.addToCart--;
    else if(num==1)
      this.addToCart++;
  }
  
  searchText:string = "";
  setSearchText(val:string){
    this.searchText=val
    console.log("Ritik Bansal" + this.searchText)
  }
}
