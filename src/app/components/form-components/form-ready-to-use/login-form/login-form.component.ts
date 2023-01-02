import { Component, OnInit } from '@angular/core';
import { faGift, faShareSquare, faUserLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  userLockIcon = faUserLock;
  shareIcon = faShareSquare;

  constructor() { }

  ngOnInit(): void {
  }

}
