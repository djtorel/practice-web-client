import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isExpanded = false;

  constructor() { }

  ngOnInit() {
  }

  onToggleMenu() {
    this.isExpanded = !this.isExpanded;
  }

}
