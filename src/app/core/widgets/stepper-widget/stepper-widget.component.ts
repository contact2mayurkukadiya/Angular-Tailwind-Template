import {
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';
import { StepperTabComponent } from './stepper-tab/stepper-tab.component';

@Component({
  selector: 'stepper',
  templateUrl: './stepper-widget.component.html',
  styleUrls: ['./stepper-widget.component.scss'],
})
export class StepperWidgetComponent implements OnInit {
  @ContentChildren(StepperTabComponent)
  children: QueryList<StepperTabComponent>;
  @Input() stepElement: any = 'horizontal';
  activeStepIndex: number = 0;
  stepActive: any;
  childrenArray: any;

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    console.log('CONTENT INIT');
    this.childrenArray = this.children.toArray();
    this.addStepData(this.childrenArray[this.activeStepIndex]);
  }

  addStepData(item) {
    this.activeStepIndex = item?.stepData?.step_index;
    this.stepActive = this.childrenArray[this.activeStepIndex];
  }
}
