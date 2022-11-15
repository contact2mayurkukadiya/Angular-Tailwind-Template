import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faHome,
  faList,
  faTableColumns,
  faFileWaveform,
  faGripHorizontal,
  faCode,
  faHatWizard,
  faListSquares,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-index-sidebar',
  templateUrl: './index-sidebar.component.html',
  styleUrls: ['./index-sidebar.component.scss'],
})
export class IndexSidebarComponent implements OnInit {
  home = faHome;
  Show: boolean = false;
  menuList: any = [
    {
      id: 'dditem1',
      item: 'Dashboard',
      icon: faHome,
      class:
        'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700',
      ulClass: 'py-2 space-y-2 transition-all accordion-collapse collapse show',
      fontClass: 'text-sm',
      route: '/',
    },
    {
      id: 'dditem3',
      item: 'Widgets',
      icon: faList,
      class:
        'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700',
      ulClass: 'py-2 space-y-2 transition-all accordion-collapse collapse show',
      fontClass: 'text-sm',
      route: '/components',
    },
    {
      listItem: false,
      divider: true,
      title: 'UI Elements',
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
          route: 'components/alert',
          name: 'Alerts',
          subItemClass:
            'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          route: 'components/badge',
          name: 'Badge',
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
          route: 'components/card',
          name: 'Card',
          subItemClass:
            'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          route: 'components/carousel',
          name: 'Carousel',
          subItemClass:
            'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          route: 'components/charts',
          name: 'Charts',
          subItemClass:
            'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          route: 'components/dropdown',
          name: 'Dropdown',
          subItemClass:
            'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          route: 'components/list',
          name: 'List',
          subItemClass:
            'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          route: 'components/progress-bar',
          name: 'Progress Bar',
          subItemClass:
            'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          route: 'components/popover',
          name: 'Popover',
          subItemClass:
            'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          route: 'components/tooltip',
          name: 'Tooltip',
          subItemClass:
            'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
      ],
    },
    {
      listItem: false,
      divider: true,
      title: 'Forms',
    },
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
          route: 'form/input-field',
          name: 'Input Fields',
          subItemClass:
            'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          route: 'form/file-input',
          name: 'File Input',
          subItemClass:
            'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          route: 'form/search-input',
          name: 'Search Input',
          subItemClass:
            'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          route: 'form/textarea',
          name: 'Textarea',
          subItemClass:
            'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          route: 'form/checkbox',
          name: 'Checkbox',
          subItemClass:
            'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          route: 'form/radio',
          name: 'Radio',
          subItemClass:
            'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          route: 'form/toggle',
          name: 'Toggle',
          subItemClass:
            'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          route: 'form/range',
          name: 'Range',
          subItemClass:
            'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          route: 'form/floating-label',
          name: 'Floating Label',
          subItemClass:
            'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
      ],
    },
    {
      id: 'dditem13',
      item: 'Form Picker',
      icon: faTableColumns,
      class:
        'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700',
      ulClass: 'py-2 space-y-2 transition-all accordion-collapse collapse show',
      fontClass: 'text-sm',
      route: 'form/picker',
    },
    {
      id: 'dditem13',
      item: 'Form Select',
      icon: faTableColumns,
      class:
        'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700',
      ulClass: 'py-2 space-y-2 transition-all accordion-collapse collapse show',
      fontClass: 'text-sm',
      route: 'form/select',
    },
    {
      id: 'dditem13',
      item: 'Form Masking',
      icon: faCode,
      class:
        'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700',
      ulClass: 'py-2 space-y-2 transition-all accordion-collapse collapse show',
      fontClass: 'text-sm',
      route: 'form/masking',
    },
    {
      id: 'dditem13',
      item: 'Form Wizard',
      icon: faHatWizard,
      class:
        'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700',
      ulClass: 'py-2 space-y-2 transition-all accordion-collapse collapse show',
      fontClass: 'text-sm',
      route: 'form/wizard',
    },
    {
      id: 'dditem13',
      item: 'Form ready to use',
      icon: faTableColumns,
      class:
        'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700',
      ulClass: 'py-2 space-y-2 transition-all accordion-collapse collapse show',
      fontClass: 'text-sm',
      route: 'form/ready',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggle() {
    this.Show = !this.Show;
  }

  redirect(item) {
    this.menuList.forEach((element) => {
      if (element.id == item.id) {
        element['selected'] = true;
      }
    });
  }
}
