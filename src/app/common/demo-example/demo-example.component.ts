import { Component, Input } from '@angular/core';

@Component({
  selector: 'flowbite-demo-example',
  template: `<div class="flex flex-col gap-2">
      <div class="flex h-full w-full flex-col justify-center gap-6 p-6">
        <ng-content></ng-content>
        <flowbite-prism
          *ngFor="let code of codes"
          [code]="code.code.trim()"
          [language]="code.language"
        ></flowbite-prism>
      </div>
  </div>`,
})
export class DemoExampleComponent {
  @Input() title?: string;
  @Input() codes: { language: string; code: string }[] = [];
  @Input() codeClassName?: string;
}
