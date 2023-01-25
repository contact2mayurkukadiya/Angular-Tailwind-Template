import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationsComponent } from './animations/animations.component';
import { FontAwesomeComponent } from './icons/font-awesome/font-awesome.component';
import { HeroIconsComponent } from './icons/hero-icons/hero-icons.component';
import { ToastComponent } from './toast/toast.component';

const routes: Routes = [
  {
    path: 'animations',
    component: AnimationsComponent,
  },
  {
    path: 'toast',
    component: ToastComponent,
  },
  {
    path: 'icons-font-awesome',
    component: FontAwesomeComponent,
  },
  {
    path: 'icons-hero-icons',
    component: HeroIconsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiElementsRoutingModule {}
