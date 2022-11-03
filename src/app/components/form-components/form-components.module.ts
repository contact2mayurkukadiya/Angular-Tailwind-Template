import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormComponentsRoutingModule } from './form-components-routing.module';
import { InputFieldComponent } from './input-field/input-field.component';
import { FileInputComponent } from './file-input/file-input.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [InputFieldComponent, FileInputComponent, SearchInputComponent, SelectComponent],
  imports: [CommonModule, FormComponentsRoutingModule],
})
export class FormComponentsModule {}
