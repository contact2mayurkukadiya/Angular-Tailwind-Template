import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartWidgetComponent } from './chart-widget/chart-widget.component';
import { CodeHighlighterWidgetComponent } from './code-highlighter-widget/code-highlighter-widget.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [ChartWidgetComponent, CodeHighlighterWidgetComponent],
  imports: [CommonModule, SharedModule],
  exports: [ChartWidgetComponent, CodeHighlighterWidgetComponent],
})
export class WidgetsModule {}
