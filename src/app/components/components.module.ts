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
@NgModule({
  declarations: [
    IndexNavbarComponent,
    ComponentComponent,
    IndexSidebarComponent,
    ChartComponent,
    ButtonComponent,
    IndexBreadcrumbComponent,
    AccordianComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    WidgetsModule,
    HighlightModule,
  ],
  exports: [
    IndexNavbarComponent,
    IndexSidebarComponent,
    IndexBreadcrumbComponent,
  ],
})
export class ComponentsModule {}
