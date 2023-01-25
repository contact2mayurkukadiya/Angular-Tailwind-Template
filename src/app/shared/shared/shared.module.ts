import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightPlusModule } from 'ngx-highlightjs/plus';
import { ClipboardModule } from 'ngx-clipboard';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HighlightPlusModule,
    ClipboardModule,
    FontAwesomeModule,
    FontAwesomeModule,
  ],
  exports: [HighlightPlusModule, FontAwesomeModule],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    // fab
    library.addIconPacks(fas, far);
  }
}
