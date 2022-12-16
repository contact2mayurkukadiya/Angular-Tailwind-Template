import { Component, OnInit } from '@angular/core';
import {
  faEarth,
  faHeart,
  faEllipsisH,
  faAngleRight,
  faDatabase,
  faX,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { ScriptInjectorService } from 'src/app/core/services/script-injector.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  earthIcon = faEarth;
  heartIcon = faHeart;
  elipseHIcon = faEllipsisH;
  angleRightIcon = faAngleRight;
  databaseIcon = faDatabase;
  xIcon = faX;
  checkIcon = faCheck;

  constructor(private scriptInjector: ScriptInjectorService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.scriptInjector.load(
      'https://unpkg.com/flowbite@1.5.3/dist/flowbite.js'
    );
  }
}
