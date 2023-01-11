import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  data: any = [
    {
      class: 'flex',
      routes: [
        {
          id: 0,
          title: 'Home',
          active: false,
          index: 0,
          route: '/',
        },
        {
          id: 1,
          title: 'Components',
          active: false,
          index: 1,
          route: 'components',
        },
        {
          id: 2,
          title: 'Buttons',
          active: true,
          index: 2,
          route: 'components/buttons',
        },
      ],
      title: 'Basic Breadcrumb',
    },
    {
      class:
        'flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb',
      routes: [
        {
          id: 0,
          title: 'Home',
          active: false,
          index: 0,
          route: '/',
        },
        {
          id: 1,
          title: 'Components',
          active: false,
          index: 1,
          route: 'components',
        },
        {
          id: 2,
          title: 'Buttons',
          active: true,
          index: 2,
          route: 'components/buttons',
        },
      ],
      title: 'Solid Breadcrumb',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
