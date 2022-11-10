import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightPlusModule } from 'ngx-highlightjs/plus';
import { ClipboardModule } from 'ngx-clipboard';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PhoneMaskDirective } from 'src/app/core/directives/phone-mask.directive';
@NgModule({
  declarations: [],
  imports: [CommonModule, HighlightPlusModule, ClipboardModule, FontAwesomeModule],
  exports: [HighlightPlusModule, FontAwesomeModule],
})
export class SharedModule {}
