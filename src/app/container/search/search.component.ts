import { Component, EventEmitter, OnInit,Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  searchText:string="";

  // @Output()

  //Event 
  @Output()
  searchTextChanged: EventEmitter<string>= new EventEmitter<string>();

  // onSearchTextChanged(){
  //   console.log(this.searchText);
  //   this.searchTextChanged.emit(this.searchText);
  // }

  changeSearchText(inputELement:HTMLInputElement){
    this.searchText = inputELement.value
    this.searchTextChanged.emit(this.searchText);
  }

}
