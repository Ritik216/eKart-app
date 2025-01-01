import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-header',
  // selector: "[app-top-header]"                  // HTML Attribute
  // selector: ".app-top-header"                   // CSS
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
