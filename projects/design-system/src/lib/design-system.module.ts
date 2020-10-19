import { NgModule } from '@angular/core';

import { MyButtonComponent } from './components/MyButton/MyButton.component';
import { CommonModule } from '@angular/common';





@NgModule({
  declarations: [
    MyButtonComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MyButtonComponent,
  ]
})
export class DesignSystemModule { }
