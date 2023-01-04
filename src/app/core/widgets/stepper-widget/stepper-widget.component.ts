import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stepper-widget',
  templateUrl: './stepper-widget.component.html',
  styleUrls: ['./stepper-widget.component.scss'],
})
export class StepperWidgetComponent implements OnInit {
  @Input() stepperData: any;
  stepActive: number = 1;
  previousStep: number = 0;

  constructor() {}

  ngOnInit(): void {
    console.log('this.stepperData: ', this.stepperData);
    // this.stepSelected(this.stepperData.steps_data[0],1);
  }

  stepSelected(item, step_no) {
    // this.previousStep = this.stepActive;
    this.stepActive = step_no;
    document.getElementById(item.step_id)?.classList.add('stepper-active');
  }
}
