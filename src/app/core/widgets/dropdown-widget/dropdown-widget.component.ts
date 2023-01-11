import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown-widget',
  templateUrl: './dropdown-widget.component.html',
  styleUrls: ['./dropdown-widget.component.scss'],
})
export class DropdownWidgetComponent implements OnInit {
  Show: boolean = false;
  @Input() menu: any;
  applyClass: boolean = true;
  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  toggle() {
    this.Show = !this.Show;
  }

  redirect(item) {
    if (item) {
      this.menu.forEach((element) => {
        if (item.id == element.id) {
          element['selected'] = true;
        }
      });
      this.router.navigate([item.route]);
    }
    this.cdr.markForCheck();
  }
}
