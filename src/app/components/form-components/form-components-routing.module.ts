import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FileInputComponent } from './file-input/file-input.component';
import { FloatingLabelComponent } from './floating-label/floating-label.component';
import { FormMakingComponent } from './form-making/form-making.component';
import { FormReadyToUseComponent } from './form-ready-to-use/form-ready-to-use.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { RadioComponent } from './radio/radio.component';
import { RangeComponent } from './range/range.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SelectComponent } from './select/select.component';
import { TextareaComponent } from './textarea/textarea.component';
import { ToggleComponent } from './toggle/toggle.component';

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
  {
    path: 'select',
    component: SelectComponent,
  },
  {
    path: 'textarea',
    component: TextareaComponent,
  },
  {
    path: 'checkbox',
    component: CheckboxComponent,
  },
  {
    path: 'radio',
    component: RadioComponent,
  },
  {
    path: 'toggle',
    component: ToggleComponent,
  },
  {
    path: 'range',
    component: RangeComponent,
  },
  {
    path: 'floating-label',
    component: FloatingLabelComponent,
  },
  {
    path: 'picker',
    component: DatepickerComponent,
  },
  {
    path: 'making',
    component: FormMakingComponent,
  },
  {
    path: 'wizard',
    component: FormWizardComponent,
  },
  {
    path: 'ready',
    component: FormReadyToUseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormComponentsRoutingModule { }
