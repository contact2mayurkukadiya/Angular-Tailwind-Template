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
    const targetEl = document.getElementById('dropdownMenu');
    const triggerEl = document.getElementById('dropdownButton');

    const options = {
      placement: 'bottom',
      onHide: () => {
          console.log('dropdown has been hidden');
      },
      onShow: () => {
          console.log('dropdown has been shown');
      }
    };

    // const dropdown = new Dropdown(targetEl, triggerEl, options);

    // dropdown.show();
  }

  toggleDropdown(){
    // 
  }
}
