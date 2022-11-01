import { Component, OnInit } from '@angular/core';
import {
  faHome,
  faList,
  faTableColumns,
  faFileWaveform,
  faGripHorizontal,
} from '@fortawesome/free-solid-svg-icons';

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
      item: 'Dashboard',
      icon: faHome,
      class:
        'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700',
      ulClass: 'py-2 space-y-2 transition-all accordion-collapse collapse show',
      fontClass: 'text-sm',
    },
    {
      id: 'dditem2',
      item: 'Components',
      icon: faGripHorizontal,
      class:
        'flex items-center p-2 w-full transition duration-75 group text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
      ulClass: 'py-2 space-y-2 transition-all accordion-collapse collapse show',
      fontClass: 'text-sm',
      menuSubItem: [
        {
          route: 'components/accordian',
          name: 'Acoordion',
          subItemClass:
            'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          route: 'components/breadcrumbs',
          name: 'Breadcrumbs',
          subItemClass:
            'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          route: 'components/buttons',
          name: 'Buttons',
          subItemClass:
            'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          route: 'components/charts',
          name: 'Charts',
          subItemClass:
            'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
      ],
    },
    {
      id: 'dditem3',
      item: 'Widgets',
      icon: faList,
      class:
        'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700',
      ulClass: 'py-2 space-y-2 transition-all accordion-collapse collapse show',
      fontClass: 'text-sm',
    },
  ];
  menu2: any = [
    {
      id: 'dditem12',
      item: 'Form Components',
      icon: faFileWaveform,
      class:
        'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700',
      ulClass: 'py-2 space-y-2 transition-all accordion-collapse collapse show',
      fontClass: 'text-sm',
      menuSubItem: [
        {
          route: 'components/basic-form',
          name: 'Basic Elements',
          subItemClass:
            'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          route: 'components/advance-form',
          name: 'Advanced Elements',
          subItemClass:
            'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
      ],
    },
  ];
  /* {
    id: 'dditem11',
    item: 'Components',
    icon : faTableColumns,
    class:
      'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700',
    ulClass: 'py-2 space-y-2 transition-all accordion-collapse collapse show',
    fontClass: 'text-sm'
  }, */
  constructor() {}

  ngOnInit(): void {}
}
