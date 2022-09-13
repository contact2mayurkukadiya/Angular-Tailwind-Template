import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './views/index/index.component';

const routes: Routes = [
  {
    path : '',
    component : IndexComponent,
    children : [
      {
        path: 'components',  
        loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)  
      },
      {
        path: 'pages',  
        loadChildren: () => import('./views/views.module').then(m => m.ViewsModule)  
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
