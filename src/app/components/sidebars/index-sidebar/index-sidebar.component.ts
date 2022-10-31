import { Component, OnInit } from '@angular/core';
import { faHome,faList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-index-sidebar',
  templateUrl: './index-sidebar.component.html',
  styleUrls: ['./index-sidebar.component.scss'],
})
export class IndexSidebarComponent implements OnInit {
  home = faHome;
  menu: any = [
    {
      id: 'dditem1',
      item: 'Components',
      icon : faList,
      class:
        'flex items-center p-2 w-full transition duration-75 group text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
      ulClass: 'py-2 space-y-2 transition-all accordion-collapse collapse show',
      menuSubItem: [
        {
          route: 'components/accordian',
          name: 'Acoordion',
          subItemClass:
            'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
        },
        {
          route: 'components/breadcrumbs',
          name: 'Breadcrumbs',
          subItemClass:
            'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
        },
        {
          route: 'components/buttons',
          name: 'Buttons',
          subItemClass:
            'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
        },
        {
          route: 'components/charts',
          name: 'Charts',
          subItemClass:
            'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
