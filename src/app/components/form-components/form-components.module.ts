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

@NgModule({
  declarations: [InputFieldComponent, FileInputComponent, SearchInputComponent, SelectComponent, TextareaComponent, CheckboxComponent, RadioComponent, ToggleComponent, RangeComponent, FloatingLabelComponent],
  imports: [CommonModule, FormComponentsRoutingModule],
})
export class FormComponentsModule {}
