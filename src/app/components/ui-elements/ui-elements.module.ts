import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiElementsRoutingModule } from './ui-elements-routing.module';
import { WidgetsModule } from 'src/app/core/widgets/widgets.module';
import { AnimationsComponent } from './animations/animations.component';


@NgModule({
  declarations: [AnimationsComponent],
  imports: [
    CommonModule,
    UiElementsRoutingModule,
    WidgetsModule
  ]
})
export class UiElementsModule { }
