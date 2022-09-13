import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightPlusModule } from 'ngx-highlightjs/plus';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [],
  imports: [CommonModule, HighlightPlusModule, ClipboardModule],
  exports: [HighlightPlusModule],
})
export class SharedModule {}
