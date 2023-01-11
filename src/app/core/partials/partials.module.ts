import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AccordionComponent,
  AccordionContentComponent,
  AccordionTitleComponent,
  AccordionPanelComponent,
} from './accordion';

@NgModule({
  declarations: [
    AccordionComponent,
    AccordionContentComponent,
    AccordionTitleComponent,
    AccordionPanelComponent,
  ],
  imports: [CommonModule],
  exports: [
    AccordionComponent,
    AccordionContentComponent,
    AccordionTitleComponent,
    AccordionPanelComponent,
  ],
})
export class PartialsModule {}
