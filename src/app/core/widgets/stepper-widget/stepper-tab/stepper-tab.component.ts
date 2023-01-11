import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'stepper-tab',
  templateUrl: './stepper-tab.component.html',
  styleUrls: ['./stepper-tab.component.scss'],
})
export class StepperTabComponent implements OnInit {
  @Input() stepData;
  @Input() stepActive;
  @Output() stepChanged = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  activeStepChanged(step_no) {
    this.stepChanged.emit(step_no);
  }
}
