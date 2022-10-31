import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-widget',
  templateUrl: './accordion-widget.component.html',
  styleUrls: ['./accordion-widget.component.scss'],
})
export class AccordionWidgetComponent implements OnInit {
  @Input() data: any;
  show: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.show = !this.show;
  }
}
