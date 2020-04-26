import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'menu-nav-bar',
  templateUrl: 'menu-nav-bar.component.html',
  styleUrls: ['menu-nav-bar.component.css'],
})
export class MenuNavBarComponent implements OnInit {
  mode = new FormControl('over');
  show: boolean = true;

  constructor() {}

  ngOnInit(): void {
  }

}