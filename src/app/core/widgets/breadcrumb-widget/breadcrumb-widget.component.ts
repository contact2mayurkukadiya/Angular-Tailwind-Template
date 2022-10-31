import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-widget',
  templateUrl: './breadcrumb-widget.component.html',
  styleUrls: ['./breadcrumb-widget.component.scss'],
})
export class BreadcrumbWidgetComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit(): void {}
}
