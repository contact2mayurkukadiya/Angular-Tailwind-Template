import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiElementsRoutingModule } from './ui-elements-routing.module';
import { WidgetsModule } from 'src/app/core/widgets/widgets.module';
import { AnimationsComponent } from './animations/animations.component';
import { ToastComponent } from './toast/toast.component';
import { FontAwesomeComponent } from './icons/font-awesome/font-awesome.component';
import { HeroIconsComponent } from './icons/hero-icons/hero-icons.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [
    AnimationsComponent,
    ToastComponent,
    FontAwesomeComponent,
    HeroIconsComponent,
  ],
  imports: [CommonModule, UiElementsRoutingModule, WidgetsModule, SharedModule],
})
export class UiElementsModule {}
