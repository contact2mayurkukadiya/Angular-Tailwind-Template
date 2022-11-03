import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'components',
        loadChildren: () =>
          import('./components/components.module').then(
            (m) => m.ComponentsModule
          ),
      },
      {
        path: 'form',
        loadChildren: () =>
          import('./components/form-components/form-components.module').then(
            (m) => m.FormComponentsModule
          ),
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/views.module').then((m) => m.ViewsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
