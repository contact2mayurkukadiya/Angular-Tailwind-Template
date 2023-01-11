import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormComponentsRoutingModule } from './form-components-routing.module';
import { InputFieldComponent } from './input-field/input-field.component';
import { FileInputComponent } from './file-input/file-input.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SelectComponent } from './select/select.component';
import { TextareaComponent } from './textarea/textarea.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { ToggleComponent } from './toggle/toggle.component';
import { RangeComponent } from './range/range.component';
import { FloatingLabelComponent } from './floating-label/floating-label.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';
import { FormMaskingComponent } from './form-masking/form-masking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import { RegistrationFormComponent } from './form-ready-to-use/registration-form/registration-form.component';
import { LoginFormComponent } from './form-ready-to-use/login-form/login-form.component';
import { WidgetsModule } from 'src/app/core/widgets/widgets.module';

@NgModule({
  declarations: [
    InputFieldComponent,
    FileInputComponent,
    SearchInputComponent,
    SelectComponent,
    TextareaComponent,
    CheckboxComponent,
    RadioComponent,
    ToggleComponent,
    RangeComponent,
    FloatingLabelComponent,
    DatepickerComponent,
    FormWizardComponent,
    FormMaskingComponent,
    RegistrationFormComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FormComponentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskModule,
    WidgetsModule
  ],
})
export class FormComponentsModule {}
