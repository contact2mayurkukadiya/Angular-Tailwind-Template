import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'stepper-tab',
  templateUrl: './stepper-tab.component.html',
  styleUrls: ['./stepper-tab.component.scss'],
})
export class StepperTabComponent implements OnInit {
  @Input() stepData;

  constructor() {}

  ngOnInit(): void {}
}
