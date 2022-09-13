import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordianComponent } from './accordian/accordian.component';
import { ButtonComponent } from './button/button.component';
import { ChartComponent } from './chart/chart.component';
import { ComponentComponent } from './component.component';
import { IndexNavbarComponent } from './navbars/index-navbar/index-navbar.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentComponent,
  },
  {
    path: 'navbars',
    component: IndexNavbarComponent,
  },
  {
    path: 'accordian',
    component: AccordianComponent,
  },
  {
    path: 'buttons',
    component: ButtonComponent,
  },
  {
    path: 'charts',
    component: ChartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
