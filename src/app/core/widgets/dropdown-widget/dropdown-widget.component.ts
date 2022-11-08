import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown-widget',
  templateUrl: './dropdown-widget.component.html',
  styleUrls: ['./dropdown-widget.component.scss'],
})
export class DropdownWidgetComponent implements OnInit {
  Show: boolean = false;
  @Input() menu: any;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggle() {
    this.Show = !this.Show;
  }

  redirect(route) {
    this.router.navigate([route]);
  }
}
