import { Component, OnInit } from '@angular/core';
import {
  faCircleCheck,
  faArrowRight,
  faGift,
  faShareSquare,
  faEllipsisH,
  faStar
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  circleCheckIcon = faCircleCheck;
  arrowRightIcon = faArrowRight;
  giftIcon = faGift;
  shareIcon = faShareSquare;
  ellipsisHIcon = faEllipsisH;
  starIcon = faStar;

  constructor() {}

  ngOnInit(): void {}
}
