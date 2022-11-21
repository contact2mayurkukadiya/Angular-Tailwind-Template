import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrismComponent } from './prism/prism.component';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { DemoExampleComponent } from './demo-example/demo-example.component';


@NgModule({
  declarations: [PrismComponent, DemoPageComponent, DemoExampleComponent],
  imports: [
    CommonModule
  ],
  exports: [PrismComponent, DemoPageComponent, DemoExampleComponent]
})
export class CommonComponentModule { }
