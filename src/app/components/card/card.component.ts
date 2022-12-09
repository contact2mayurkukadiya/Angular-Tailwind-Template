import { Component, OnInit } from '@angular/core';
import {
  faCircleCheck,
  faArrowRight,
  faGift,
  faShareSquare,
  faEllipsisH,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { ScriptInjectorService } from 'src/app/core/services/script-injector.service';

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

  constructor(private scriptInjector: ScriptInjectorService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.scriptInjector.load(
      'https://unpkg.com/flowbite@1.5.3/dist/flowbite.js'
    );
  }
}
