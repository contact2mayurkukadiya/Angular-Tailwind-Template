import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { ViewsModule } from './views/views.module';
import {
  HighlightModule,
  HIGHLIGHT_OPTIONS,
  HighlightOptions,
} from 'ngx-highlightjs';
import { HighlightPlusModule } from 'ngx-highlightjs/plus';
import { SharedModule } from './shared/shared/shared.module';
import 'flowbite';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { CommonComponentModule } from './common/common-component.module';
import { ScriptInjectorService } from './core/services/script-injector.service';
import { StepperTabComponent } from './core/widgets/stepper-widget/stepper-tab/stepper-tab.component';

export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HighlightModule,
    HighlightPlusModule,
    SharedModule,
    NgxMaskModule.forRoot({ validation: true }),
    CommonComponentModule,
  ],
  exports: [],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        lineNumbers: true,
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('highlightjs-line-numbers.js'),
        // themePath: 'node_modules/highlight.js/styles/github.css',
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml'),
        },
      },
    },
    ScriptInjectorService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [StepperTabComponent]
})
export class AppModule {}
