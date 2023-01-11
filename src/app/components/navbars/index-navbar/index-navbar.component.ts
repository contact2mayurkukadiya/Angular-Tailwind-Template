import { Component, OnInit } from '@angular/core';
import { faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-index-navbar',
  templateUrl: './index-navbar.component.html',
  styleUrls: ['./index-navbar.component.scss'],
})
export class IndexNavbarComponent implements OnInit {
  bell = faBell;
  user: any = [
    {
      id: 'ddnavbar',
      item: 'Mark',
      class:
        'dropdown-toggle px-6 py-2.5 bg-transparent text-black font-medium text-xs leading-tight uppercase rounded transition duration-150 ease-in-out flex items-center whitespace-nowrap',
      ulClass: 'absolute left-0 mt-2 w-40 rounded-md bg-white shadow-md',
      menuSubItem: [
        {
          route: '',
          name: 'Profile',
          subItemClass:
            'dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100',
        },
        {
          route: '',
          name: 'Settings',
          subItemClass:
            'dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100',
        },
      ],
    },
  ];

  constructor() {}

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
      },
    };

    // const dropdown = new Dropdown(targetEl, triggerEl, options);

    // dropdown.show();
  }

  toggleDropdown() {
    //
  }
}
