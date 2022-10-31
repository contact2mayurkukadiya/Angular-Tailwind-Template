import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  data: any = [
    {
      class : 'flex',
      tab_1_title : 'Home',
      tab_2_title : 'Components',
      tab_3_title : 'Buttons',
      title : 'Basic Breadcrumb'
    },
    {
      class : 'flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb',
      tab_1_title : 'Home',
      tab_2_title : 'Components',
      tab_3_title : 'Buttons',
      title : 'Solid Breadcrumb'
    }
  ]

  constructor() {}

  ngOnInit(): void {}
}
