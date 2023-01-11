import { Component, OnInit } from '@angular/core';
import { faInfoCircle, faClose, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  infoIcon = faInfoCircle;
  closeIcon = faClose;
  eyeIcon = faEye;
  
  constructor() { }

  ngOnInit(): void {
  }

}
