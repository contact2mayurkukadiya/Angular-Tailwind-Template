import { Component, OnInit } from '@angular/core';
import { faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-index-navbar',
  templateUrl: './index-navbar.component.html',
  styleUrls: ['./index-navbar.component.scss']
})
export class IndexNavbarComponent implements OnInit {
  bell = faBell;
  constructor() { }

  ngOnInit(): void {
  }

}
