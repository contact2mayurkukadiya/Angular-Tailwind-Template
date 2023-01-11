import { Component, OnInit } from '@angular/core';
import { faDotCircle, faCheckCircle, faCircleXmark, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  dotIcon = faDotCircle;
  checkCircleIcon = faCheckCircle;
  closeIcon = faCircleXmark;
  checkCircle = faCheck;

  constructor() { }

  ngOnInit(): void {
  }

}
