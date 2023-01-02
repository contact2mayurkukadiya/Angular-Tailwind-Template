import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-wizard',
  templateUrl: './form-wizard.component.html',
  styleUrls: ['./form-wizard.component.scss'],
})
export class FormWizardComponent implements OnInit {
  stepsArray: any = [
    {
      stepper_type: 'horizontal',
      stepper_id: '001_horizone',
      stepper_data: [
        {
          step_index: 1,
          step_title: 'Step 1',
          step_state: 'stepper-active',
        },
        {
          step_index: 2,
          step_title: 'Step 2',
          step_state: 'stepper-completed',
        },
        {
          step_index: 3,
          step_title: 'Step 3',
          step_state: '',
        },
      ],
    },
  ];

  stepActive: number = 1;

  constructor() {}

  ngOnInit(): void {}

  stepSelected(event, step_no) {
    console.log('here event is: ', event);
    this.stepActive = step_no;
  }
}
