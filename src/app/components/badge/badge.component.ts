import { Component, OnInit } from '@angular/core';
import {
  faEnvelope,
  faCheck,
  faClock,
  faClose,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent implements OnInit {
  messageIcon = faEnvelope;
  checkIcon = faCheck;
  clockIcon = faClock;
  closeIcon = faClose;

  constructor() {}

  ngOnInit(): void {}
}
