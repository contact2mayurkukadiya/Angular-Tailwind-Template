import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-stepper-widget',
  templateUrl: './stepper-widget.component.html',
  styleUrls: ['./stepper-widget.component.scss'],
})
export class StepperWidgetComponent implements OnInit {
  @Input() stepperData: any;
  @Input() stepActive: number = 1;
  @Output() stepActiveChange: EventEmitter<number> = new EventEmitter<number>();
  previousStep: number = 0;
  @Input() template: TemplateRef<any>;
  currentTemplate: TemplateRef<any>;

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit(): void {}

  stepSelected(item, step_no) {
    this.stepActive = step_no;
    this.stepActiveChange.emit(this.stepActive);
    document.getElementById(item.step_id)?.classList.add('stepper-active');
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.ref.detectChanges();
    if (this.template !== undefined) this.currentTemplate = this.template;
  }
}
