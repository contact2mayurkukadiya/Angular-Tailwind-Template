import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-wizard',
  templateUrl: './form-wizard.component.html',
  styleUrls: ['./form-wizard.component.scss'],
})
export class FormWizardComponent implements OnInit {
  stepActive: number = 1;
  step1Data: any = {
    step_index: 1,
    step_title: 'Step 1',
  };
  step2Data: any = {
    step_index: 2,
    step_title: 'Step 2',
  };
  step3Data: any = {
    step_index: 3,
    step_title: 'Step 3',
  };

  constructor() {}

  ngOnInit(): void {}

  stepChanged(event) {
    this.stepActive = event;
  }
}
