import {
  ChangeDetectorRef,
  Component,
  ComponentRef,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { StepperTabComponent } from '../stepper-tab/stepper-tab.component';

@Component({
  selector: 'stepper-horizontal',
  templateUrl: './stepper-horizontal-widget.component.html',
  styleUrls: ['./stepper-horizontal-widget.component.scss'],
})
export class SteppeHorizontalrWidgetComponent implements OnInit {
  @ContentChildren(StepperTabComponent)
  children: QueryList<StepperTabComponent>;
  @ContentChildren(TemplateRef) children2: QueryList<
    TemplateRef<StepperTabComponent>
  >;
  @Input() stepper_type: any;
  @Input() stepper_navigation__buttons: boolean = false;
  @Input() stepper_connector_class: any;
  @Output() nextStep = new EventEmitter<boolean>();
  @Output() previousStep = new EventEmitter<boolean>();
  @Output() stepChanged = new EventEmitter<boolean>();
  activeStepIndex: number = 0;
  childrenArray: any;
  compo_temp = StepperTabComponent;
  @Input() newTemplate: TemplateRef<any>;

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.childrenArray = this.children.toArray();
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

  componentCreated(compRef: ComponentRef<any>, item) {
    console.log('item: ', item);
    console.log('compRef: ', compRef);
  }
}
