import { Component, OnInit } from '@angular/core';
import { faCheckCircle, faShareSquare, faUserLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  checkCircleIcon = faCheckCircle;
  userLockIcon = faUserLock;
  shareIcon = faShareSquare;

  constructor() { }

  ngOnInit(): void {
  }

}
