import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { IndexNavbarComponent } from './navbars/index-navbar/index-navbar.component';
import { ComponentComponent } from './component.component';
import { IndexSidebarComponent } from './sidebars/index-sidebar/index-sidebar.component';
import { ChartComponent } from './chart/chart.component';
import { WidgetsModule } from '../core/widgets/widgets.module';
import { ButtonComponent } from './button/button.component';
import { IndexBreadcrumbComponent } from './breadcrumbs/index-breadcrumb/index-breadcrumb.component';
import { AccordianComponent } from './accordian/accordian.component';
import { HighlightModule } from 'ngx-highlightjs';
import { SharedModule } from '../shared/shared/shared.module';
import Alpine from 'alpinejs';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { AlertsComponent } from './alerts/alerts.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { BadgeComponent } from './badge/badge.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { PopoverComponent } from './popover/popover.component';
import { CardComponent } from './card/card.component';
 
Alpine.start()
@NgModule({
  declarations: [
    IndexNavbarComponent,
    ComponentComponent,
    IndexSidebarComponent,
    ChartComponent,
    ButtonComponent,
    IndexBreadcrumbComponent,
    AccordianComponent,
    BreadcrumbComponent,
    AlertsComponent,
    TooltipComponent,
    BadgeComponent,
    ProgressBarComponent,
    PopoverComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    WidgetsModule,
    HighlightModule,
    SharedModule
  ],
  exports: [
    IndexNavbarComponent,
    IndexSidebarComponent,
    IndexBreadcrumbComponent,
  ],
})
export class ComponentsModule {}
