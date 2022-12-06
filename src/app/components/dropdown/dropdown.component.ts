import { Component, OnInit } from '@angular/core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  arrowDownIcon = faArrowDown;
  open: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggle(id) {
   /*  let btn = document.getElementById(id);
    console.log('btn: ', btn?.style.display);
    if (btn?.style?.display === 'none') {
      btn.style.display = 'block';
    } */
    this.open = !this.open;
  }
}
