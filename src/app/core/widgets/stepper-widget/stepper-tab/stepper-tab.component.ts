import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'stepper-tab',
  templateUrl: './stepper-tab.component.html',
  styleUrls: ['./stepper-tab.component.scss'],
})
export class StepperTabComponent implements OnInit {
  @Input() stepData;
  @Input() stepActive;

  constructor() {}

  ngOnInit(): void {}

  stepSelected() {
    // this.stepActive = step_no;
    // this.stepActiveChange.emit(this.stepActive);
    // document.getElementById(item.step_id)?.classList.add('stepper-active');
  }
}
