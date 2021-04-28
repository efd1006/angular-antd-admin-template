import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isCollapsed = false;
  
  // get this form a global service and has to be observable
  $loading: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
