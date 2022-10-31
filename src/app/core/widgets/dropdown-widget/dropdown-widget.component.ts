import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-widget',
  templateUrl: './dropdown-widget.component.html',
  styleUrls: ['./dropdown-widget.component.scss'],
})
export class DropdownWidgetComponent implements OnInit {
  Show: boolean = false;
  @Input() menu: any;
  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.Show = !this.Show;
  }
}
