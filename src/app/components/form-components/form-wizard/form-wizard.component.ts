import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { StepperWidgetComponent } from 'src/app/core/widgets/stepper-widget/stepper-widget.component';
import { faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form-wizard',
  templateUrl: './form-wizard.component.html',
  styleUrls: ['./form-wizard.component.scss'],
})
export class FormWizardComponent implements OnInit {
  @ViewChild(StepperWidgetComponent) stepperWidget: StepperWidgetComponent;
  tabnavigation__buttons: boolean = false;
  StepperWidgetComponentref = StepperWidgetComponent;
  checkCircle = faCheckCircle;
  tab_Temp_arr: any;
  default_stepper: any = {
    stepper_type: 'horizontal',
    stepper_connector_class: 'stepper-connector-default',
    stepper_tabs: [
      {
        tab_index: 0,
        step_title: 'Step 1',
        tab_completed_icon: faCheckCircle,
      },
      {
        tab_index: 1,
        step_title: 'Step 2',
        tab_completed_icon: faCheckCircle,
      },
      {
        tab_index: 2,
        step_title: 'Step 3',
        tab_completed_icon: faCheckCircle,
      },
    ],
  };
  progress_stepper: any = {
    stepper_type: 'horizontal',
    stepper_navigation__buttons: true,
    tab_template: true,
    stepper_connector_class: 'stepper-connector-default',
    stepper_tabs: [
      {
        tab_index: 0,
        tab_active_icon: faCircle,
        tab_completed_icon: faCheckCircle,
      },
      {
        tab_index: 1,
        tab_active_icon: faCircle,
        tab_completed_icon: faCheckCircle,
      },
      {
        tab_index: 2,
        tab_active_icon: faCircle,
        tab_completed_icon: faCheckCircle,
      },
    ],
  };
  detailed_stepper: any = {
    stepper_type: 'horizontal',
    stepper_connector_class: 'stepper-connector-default',
    stepper_tabs: [
      {
        tab_index: 0,
        step_title: 'User info',
        tab_completed_icon: faCheckCircle,
        step_description: 'Step details here',
      },
      {
        tab_index: 1,
        step_title: 'Company info',
        tab_completed_icon: faCheckCircle,
        step_description: 'Step details here',
      },
      {
        tab_index: 2,
        step_title: 'Payment info',
        tab_completed_icon: faCheckCircle,
        step_description: 'Step details here',
      },
    ],
  };
  timeline_stepper: any = {
    stepper_type: 'vertical',
    stepper_connector_class: 'stepper-connector-default',
    stepper_tabs: [
      {
        tab_index: 0,
        step_title_class: 'text-left text-gray-500',
        active_step_title_class: 'text-left text-red-500',
        step_description_class: 'text-left text-gray-500',
        active_step_description_class: 'text-left text-red-500',
        step_title: 'Personal Info',
        tab_completed_icon: faCheckCircle,
        step_description: 'Step details here',
      },
      {
        tab_index: 1,
        step_title_class: 'text-left text-gray-500',
        active_step_title_class: 'text-left text-green-500',
        step_description_class: 'text-left text-gray-500',
        active_step_description_class: 'text-left text-green-500',
        step_title: 'Account Info',
        tab_completed_icon: faCheckCircle,
        step_description: 'Step details here',
      },
      {
        tab_index: 2,
        step_title_class: 'text-left text-gray-500',
        active_step_title_class: 'text-left text-purple-500',
        step_description_class: 'text-left text-gray-500',
        active_step_description_class: 'text-left text-purple-500',
        step_title: 'Review',
        tab_completed_icon: faCheckCircle,
        step_description: 'Step details here',
      },
      {
        tab_index: 3,
        step_title_class: 'text-left text-gray-500',
        active_step_title_class: 'text-left text-yellow-500',
        step_description_class: 'text-left text-gray-500',
        active_step_description_class: 'text-left text-yellow-500',
        step_title: 'Confirmation',
        tab_completed_icon: faCheckCircle,
        step_description: 'Step details here',
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}

  previousStep(event) {}

  nextStep(event) {}

  stepChanged(event) {}
}
