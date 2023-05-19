import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faHome,
  faList,
  faTableColumns,
  faFileWaveform,
  faGripHorizontal,
  faCode,
  faHatWizard,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-index-sidebar',
  templateUrl: './index-sidebar.component.html',
  styleUrls: ['./index-sidebar.component.scss'],
})
export class IndexSidebarComponent implements OnInit {
  home = faHome;
  menuList: any = [
    { separator: true, text: 'Navigation' },
    // {
    //   id: 'dditem1',
    //   item: 'Dashboard',
    //   icon: faHome,
    //   class:
    //     'flex items-center p-2 w-full font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700',
    //   ulClass: 'py-2 space-y-2 transition-all accordion-collapse collapse show',
    //   fontClass: 'text-sm',
    //   route: '/',
    // },
    {
      id: 'dditem2',
      item: 'Widgets',
      icon: faList,
      class:
        'flex items-center p-2 w-full font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700',
      ulClass: 'py-2 space-y-2 transition-all accordion-collapse collapse show',
      fontClass: 'text-sm',
      route: 'components',
    },
    { separator: true, text: 'UI Elements' },
    {
      id: 'dditem3',
      item: 'Components',
      icon: faGripHorizontal,
      class:
        'flex items-center p-2 w-full transition duration-75 group font-normal text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
      ulClass: 'py-2 space-y-2 transition-all accordion-collapse collapse show',
      fontClass: 'text-sm',
      menuSubItem: [
        {
          id: 'dditem301',
          route: 'components/accordian',
          name: 'Acoordion',
          subItemClass:
            'flex items-center p-2 pl-11 w-full font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          id: 'dditem302',
          route: 'components/alert',
          name: 'Alerts',
          subItemClass:
            'flex items-center p-2 pl-11 w-full font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          id: 'dditem303',
          route: 'components/badge',
          name: 'Badge',
          subItemClass:
            'flex items-center p-2 pl-11 w-full font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          id: 'dditem304',
          route: 'components/breadcrumbs',
          name: 'Breadcrumbs',
          subItemClass:
            'flex items-center p-2 pl-11 w-full font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          id: 'dditem305',
          route: 'components/buttons',
          name: 'Buttons',
          subItemClass:
            'flex items-center p-2 pl-11 w-full font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          id: 'dditem306',
          route: 'components/card',
          name: 'Card',
          subItemClass:
            'flex items-center p-2 pl-11 w-full font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          id: 'dditem307',
          route: 'components/carousel',
          name: 'Carousel',
          subItemClass:
            'flex items-center p-2 pl-11 w-full font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          id: 'dditem308',
          route: 'components/charts',
          name: 'Charts',
          subItemClass:
            'flex items-center p-2 pl-11 w-full font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          id: 'dditem309',
          route: 'components/dropdown',
          name: 'Dropdown',
          subItemClass:
            'flex items-center p-2 pl-11 w-full font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          id: 'dditem310',
          route: 'components/list',
          name: 'List',
          subItemClass:
            'flex items-center p-2 pl-11 w-full font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          id: 'dditem311',
          route: 'components/progress-bar',
          name: 'Progress Bar',
          subItemClass:
            'flex items-center p-2 pl-11 w-full font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          id: 'dditem312',
          route: 'components/popover',
          name: 'Popover',
          subItemClass:
            'flex items-center p-2 pl-11 w-full font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          id: 'dditem313',
          route: 'components/tooltip',
          name: 'Tooltip',
          subItemClass:
            'flex items-center p-2 pl-11 w-full font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
      ],
    },
    {
      id: 'dditem4',
      item: 'Animations',
      icon: faSpinner,
      class:
        'flex items-center p-2 w-full font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700',
      ulClass: 'py-2 space-y-2 transition-all accordion-collapse collapse show',
      fontClass: 'text-sm',
      route: '/ui-elements/animations',
    },
    { separator: true, text: 'Form Elements' },
    {
      id: 'dditem12',
      item: 'Form Components',
      icon: faFileWaveform,
      class:
        'flex items-center p-2 w-full font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700',
      ulClass: 'py-2 space-y-2 transition-all accordion-collapse collapse show',
      fontClass: 'text-sm',
      menuSubItem: [
        {
          id: 'dditem120',
          route: 'form/input-field',
          name: 'Input Fields',
          subItemClass:
            'flex items-center p-2 pl-11 w-full font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          id: 'dditem121',
          route: 'form/file-input',
          name: 'File Input',
          subItemClass:
            'flex items-center p-2 pl-11 w-full font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          id: 'dditem122',
          route: 'form/search-input',
          name: 'Search Input',
          subItemClass:
            'flex items-center p-2 pl-11 w-full font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          id: 'dditem123',
          route: 'form/textarea',
          name: 'Textarea',
          subItemClass:
            'flex items-center p-2 pl-11 w-full font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          id: 'dditem124',
          route: 'form/checkbox',
          name: 'Checkbox',
          subItemClass:
            'flex items-center p-2 pl-11 w-full font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          id: 'dditem125',
          route: 'form/radio',
          name: 'Radio',
          subItemClass:
            'flex items-center p-2 pl-11 w-full font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          id: 'dditem126',
          route: 'form/toggle',
          name: 'Toggle',
          subItemClass:
            'flex items-center p-2 pl-11 w-full font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          id: 'dditem127',
          route: 'form/range',
          name: 'Range',
          subItemClass:
            'flex items-center p-2 pl-11 w-full font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          id: 'dditem128',
          route: 'form/floating-label',
          name: 'Floating Label',
          subItemClass:
            'flex items-center p-2 pl-11 w-full font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
      ],
    },
    {
      id: 'dditem14',
      item: 'Form Select',
      icon: faTableColumns,
      class:
        'flex items-center p-2 w-full font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700',
      ulClass: 'py-2 space-y-2 transition-all accordion-collapse collapse show',
      fontClass: 'text-sm',
      route: 'form/select',
    },
    {
      id: 'dditem15',
      item: 'Form Masking',
      icon: faCode,
      class:
        'flex items-center p-2 w-full font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700',
      ulClass: 'py-2 space-y-2 transition-all accordion-collapse collapse show',
      fontClass: 'text-sm',
      route: 'form/masking',
    },
    // {
    //   id: 'dditem16',
    //   item: 'Form Stepper',
    //   icon: faHatWizard,
    //   class:
    //     'flex items-center p-2 w-full font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700',
    //   ulClass: 'py-2 space-y-2 transition-all accordion-collapse collapse show',
    //   fontClass: 'text-sm',
    //   route: 'form/stepper',
    // },
    {
      id: 'dditem17',
      item: 'Ready to use',
      icon: faTableColumns,
      class:
        'flex items-center p-2 w-full font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700',
      ulClass: 'py-2 space-y-2 transition-all accordion-collapse collapse show',
      fontClass: 'text-sm',
      menuSubItem: [
        {
          id: 'dditem170',
          route: 'form/contact-form',
          name: 'Contact Form',
          subItemClass:
            'flex items-center p-2 pl-11 w-full font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          id: 'dditem171',
          route: 'form/registration-form',
          name: 'Registration Form',
          subItemClass:
            'flex items-center p-2 pl-11 w-full font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
        {
          id: 'dditem171',
          route: 'form/login-form',
          name: 'Login Form',
          subItemClass:
            'flex items-center p-2 pl-11 w-full font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm',
        },
      ],
    },
  ];
  // { separator: true, text: 'Pages' },
  copyMenuList: any = JSON.parse(JSON.stringify(this.menuList));
  constructor(private router: Router, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void { }

  toggle(item) {
    item.selected = !item.selected;
  }

  menuselected(item, menu = 'menu', parentmenuid = 0) {
    if (item) {
      this.copyMenuList = JSON.parse(JSON.stringify(this.menuList));
      this.copyMenuList.forEach((element) => {
        if (menu == 'menu') {
          // item.selected = false;
          if (item.id == element.id) {
            element['selected'] = true;
          } else {
            // element['selected'] = false;
          }
        } else {
          if (parentmenuid == element.id) {
            element.menuSubItem.forEach((element) => {
              if (item.id == element.id) {
                element['selected'] = true;
              } else {
                element['selected'] = false;
              }
            });
          }
        }
      });
      this.router.navigate([item.route]);
    }
    this.cdr.markForCheck();
  }
}
