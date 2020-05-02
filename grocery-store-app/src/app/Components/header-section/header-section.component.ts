import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.css']
})
export class HeaderSectionComponent implements OnInit {
  headers = [
    {
      name: 'Home',
      url: 'home-page',
    },
    {
      name: 'Marketplace',
      url: 'marketplace-page',
    },
    {
      name: 'Contact Us',
      url: 'contact-us-page',
    },
    {
      name: 'Inventory',
      url: 'inventory-page',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
