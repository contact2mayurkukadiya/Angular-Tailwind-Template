import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'stepper',
  templateUrl: './stepper-widget.component.html',
  styleUrls: ['./stepper-widget.component.scss'],
})
export class StepperWidgetComponent implements OnInit {
  @Input() stepElement: any = 'horizontal';

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit(): void {}
}
