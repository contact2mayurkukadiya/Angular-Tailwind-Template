import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-wizard',
  templateUrl: './form-wizard.component.html',
  styleUrls: ['./form-wizard.component.scss'],
})
export class FormWizardComponent implements OnInit {
  h_stepsArray: any = {
    stepper_type: 'horizontal',
    stepper_id: '001_horizone',
    steps_data: [
      {
        step_id: 'step_1',
        step_index: 1,
        step_title: 'Step 1',
        step_state: 'stepper-active',
        is_step_visited: false,
      },
      {
        step_id: 'step_2',
        step_index: 2,
        step_title: 'Step 2',
        step_state: '',
        is_step_visited: false,
      },
      {
        step_id: 'step_3',
        step_index: 3,
        step_title: 'Step 3',
        step_state: '',
        is_step_visited: false,
      },
    ],
  };
  v_stepsArray: any = {
    stepper_type: 'vertical',
    stepper_id: '001_horizone',
    steps_data: [
      {
        step_id: 'step_1',
        step_index: 1,
        step_title: 'Step 1',
        step_state: 'stepper-active',
        is_step_visited: false,
      },
      {
        step_id: 'step_2',
        step_index: 2,
        step_title: 'Step 2',
        step_state: '',
        is_step_visited: false,
      },
      {
        step_id: 'step_3',
        step_index: 3,
        step_title: 'Step 3',
        step_state: '',
        is_step_visited: false,
      },
    ],
  };
  stepActive: number = 1;
  previousStep: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
