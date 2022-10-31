import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartWidgetComponent } from './chart-widget/chart-widget.component';
import { CodeHighlighterWidgetComponent } from './code-highlighter-widget/code-highlighter-widget.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { DropdownWidgetComponent } from './dropdown-widget/dropdown-widget.component';
import { AccordionWidgetComponent } from './accordion-widget/accordion-widget.component';
import { BreadcrumbWidgetComponent } from './breadcrumb-widget/breadcrumb-widget.component';

@NgModule({
  declarations: [ChartWidgetComponent, CodeHighlighterWidgetComponent, DropdownWidgetComponent, AccordionWidgetComponent, BreadcrumbWidgetComponent],
  imports: [CommonModule, SharedModule],
  exports: [ChartWidgetComponent, CodeHighlighterWidgetComponent, DropdownWidgetComponent, AccordionWidgetComponent, BreadcrumbWidgetComponent],
})
export class WidgetsModule {}
