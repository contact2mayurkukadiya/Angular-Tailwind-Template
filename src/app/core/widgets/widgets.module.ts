import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartWidgetComponent } from './chart-widget/chart-widget.component';
import { CodeHighlighterWidgetComponent } from './code-highlighter-widget/code-highlighter-widget.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { DropdownWidgetComponent } from './dropdown-widget/dropdown-widget.component';
import { AccordionWidgetComponent } from './accordion-widget/accordion-widget.component';
import { BreadcrumbWidgetComponent } from './breadcrumb-widget/breadcrumb-widget.component';
import { CommonComponentModule } from 'src/app/common/common-component.module';
import { PartialsModule } from '../partials/partials.module';
import { ButtonWidgetComponent } from './button-widget/button-widget.component';
import { BadgeWidgetComponent } from './badge-widget/badge-widget.component';
import { StepperWidgetComponent } from './stepper-widget/stepper-widget.component'; 
import { AnimationWidgetComponent } from './animation-widget/animation-widget.component';
import { StepperTabComponent } from './stepper-widget/stepper-tab/stepper-tab.component'; 

@NgModule({
  declarations: [
    ChartWidgetComponent,
    CodeHighlighterWidgetComponent,
    DropdownWidgetComponent,
    AccordionWidgetComponent,
    BreadcrumbWidgetComponent,
    ButtonWidgetComponent,
    BadgeWidgetComponent,
    StepperWidgetComponent,
    AnimationWidgetComponent,
    StepperTabComponent
  ],
  imports: [CommonModule, SharedModule, CommonComponentModule, PartialsModule],
  exports: [
    ChartWidgetComponent,
    CodeHighlighterWidgetComponent,
    DropdownWidgetComponent,
    AccordionWidgetComponent,
    BreadcrumbWidgetComponent,
    ButtonWidgetComponent,
    BadgeWidgetComponent,
    StepperWidgetComponent,
    AnimationWidgetComponent,
    StepperTabComponent
  ],
})
export class WidgetsModule {}
