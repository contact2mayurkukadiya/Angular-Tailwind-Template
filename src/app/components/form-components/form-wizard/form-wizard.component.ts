import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-form-wizard',
  templateUrl: './form-wizard.component.html',
  styleUrls: ['./form-wizard.component.scss'],
})
export class FormWizardComponent implements OnInit {
  @ViewChild('step_1_tmp', { static: true }) myDiv1: TemplateRef<HTMLElement>;
  @ViewChild('step_2_tmp', { static: true }) myDiv2: TemplateRef<HTMLElement>;
  @ViewChild('step_3_tmp', { static: true }) myDiv3: TemplateRef<HTMLElement>;
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
    stepper_id: '001_vertic',
    steps_data: [
      {
        step_id: 'step_01',
        step_index: 1,
        step_title: 'Step 1',
        step_state: 'stepper-active',
        is_step_visited: false,
      },
      {
        step_id: 'step_02',
        step_index: 2,
        step_title: 'Step 2',
        step_state: '',
        is_step_visited: false,
      },
      {
        step_id: 'step_03',
        step_index: 3,
        step_title: 'Step 3',
        step_state: '',
        is_step_visited: false,
      },
    ],
  };
  stepActive: number = 1;
  template: TemplateRef<any>;

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

  ngAfterViewInit(): void {
    this.setTemp(1);
  }

  setTemp(event) {
    switch (event) {
      case 1:
        this.template = this.myDiv1;
        break;
      case 2:
        this.template = this.myDiv2;
        break;
      case 3:
        this.template = this.myDiv3;
        break;
    }
  }
}
