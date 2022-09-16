import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,ComponentsModule
  ]
})
export class ViewsModule { }
