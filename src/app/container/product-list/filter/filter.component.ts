import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input()
  all:number=0;
  @Input()
  mens: number = 0;
  @Input()
  womens: number = 0;
  @Input()
  others: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  selectedFilterRadioButton:string = "all";

  valueChange(){
    console.log(this.selectedFilterRadioButton);
  }

  @Output()
  selectedFilterRadioButtonChanged:EventEmitter<string> = new EventEmitter<string>();

  onSelectedFilterRadioButtonChanged(){
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
  }
}
