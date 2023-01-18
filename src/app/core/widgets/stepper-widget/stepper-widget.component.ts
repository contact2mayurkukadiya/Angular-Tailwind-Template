import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  TemplateRef,
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
  @Input() stepper_type: any = 'horizontal';
  @Input() stepper_navigation__buttons: boolean = false;
  @Input() stepper_connector_class: any;
  @Output() nextStep = new EventEmitter<boolean>();
  @Output() previousStep = new EventEmitter<boolean>();
  @Output() stepChanged = new EventEmitter<boolean>();
  activeStepIndex: number = 0;
  childrenArray: any;

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.childrenArray = this.children.toArray();
    console.log('this.childrenArray: ', this.childrenArray);
    this.tabActive(this.childrenArray[this.activeStepIndex]);
  }

  tabActive(item) {
    item.is_visited = true;
    item.active();
    this.childrenArray.forEach((element) => {
      if (element.tab_id != item.tab_id) element.inactive();
    });
    this.stepChanged.emit(true);
  }

  next() {
    let tabLength = this.childrenArray.length - 1;
    if (this.activeStepIndex < tabLength)
      this.activeStepIndex = this.activeStepIndex + 1;
    this.tabActive(this.childrenArray[this.activeStepIndex]);
    this.nextStep.emit(true);
  }

  previous() {
    if (this.activeStepIndex > 0)
      this.activeStepIndex = this.activeStepIndex - 1;
    this.tabActive(this.childrenArray[this.activeStepIndex]);
    this.previousStep.emit(true);
  }
}
