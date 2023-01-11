import { Component, Input, OnInit } from '@angular/core';
import { faHome, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-breadcrumb-widget',
  templateUrl: './breadcrumb-widget.component.html',
  styleUrls: ['./breadcrumb-widget.component.scss'],
})
export class BreadcrumbWidgetComponent implements OnInit {
  @Input() data: any;
  home = faHome;
  angle_right = faAngleRight;
  constructor() {}

  ngOnInit(): void {}
}
