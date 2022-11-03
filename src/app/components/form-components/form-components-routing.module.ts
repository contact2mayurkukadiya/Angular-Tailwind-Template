import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileInputComponent } from './file-input/file-input.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { SearchInputComponent } from './search-input/search-input.component';

const routes: Routes = [
  {
    path: 'input-field',
    component: InputFieldComponent,
  },
  {
    path: 'file-input',
    component: FileInputComponent,
  },
  {
    path: 'search-input',
    component: SearchInputComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormComponentsRoutingModule { }
