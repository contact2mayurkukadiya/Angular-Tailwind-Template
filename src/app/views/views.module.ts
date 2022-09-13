import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { IndexComponent } from './index/index.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,ComponentsModule
  ]
})
export class ViewsModule { }
