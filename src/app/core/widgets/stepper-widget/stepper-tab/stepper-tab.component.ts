import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'stepper-tab',
  templateUrl: './stepper-tab.component.html',
  styleUrls: ['./stepper-tab.component.scss'],
})
export class StepperTabComponent implements OnInit {
  @Input() stepper_type;
  @Input() stepData;
  @Input() tab_active_template;
  @Input() tab_completed_template;
  @Input() tab_untouched_template;
  @Input() tab_template: boolean = false;
  is_active: boolean = false;
  is_visited: boolean = false;
  tab_id: any = this.generateId(8);
  @Input() tabTemplate:TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {}

  active() {
    this.is_active = true;
  }

  inactive() {
    this.is_active = false;
  }

  private generateId(length) {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
