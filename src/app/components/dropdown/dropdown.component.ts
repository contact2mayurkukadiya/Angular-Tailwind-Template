import { Component, OnInit } from '@angular/core';
import {
  faAngleDown,
  faUserPlus,
  faAngleLeft,
  faAngleRight,
  faAngleUp,
  faUserMinus,
  faEllipsisH,
  faEllipsisV,
  faBell,
  faUserFriends,
  faHeart,
  faMessage,
  faVideo,
  faEye
} from '@fortawesome/free-solid-svg-icons';
import { ScriptInjectorService } from 'src/app/core/services/script-injector.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  open: boolean = false;
  arrowDownIcon = faAngleDown;
  addUserIcon = faUserPlus;
  arrowRight = faAngleRight;
  removeUserIcon = faUserMinus;
  moreIconH = faEllipsisH;
  moreIconV = faEllipsisV;
  bellIcon = faBell;
  angleLeft = faAngleLeft;
  angleTop = faAngleUp;
  userFriendsIcon = faUserFriends;
  heartIcon = faHeart;
  messageIcon = faMessage;
  videoIcon = faVideo;
  eyeIcon = faEye;

  constructor(private scriptInjector: ScriptInjectorService) {}

  ngOnInit(): void {}

  toggle(id) {
    this.open = !this.open;
  }

  ngAfterViewInit(): void {
    this.scriptInjector.load(
      'https://unpkg.com/flowbite@1.5.3/dist/flowbite.js'
    );
  }
}
