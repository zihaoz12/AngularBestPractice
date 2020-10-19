import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MyDropDownComponent } from './MyDropDown.component';
@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations:[
    MyDropDownComponent
  ],
  exports:[
    MyDropDownComponent
  ]
})

export class MyDropDownModule{}
