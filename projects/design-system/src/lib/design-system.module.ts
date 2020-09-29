import { NgModule } from '@angular/core';
import { DesignSystemComponent } from './design-system.component';
import { MyButtonComponent } from './components/MyButton/MyButton.component';



@NgModule({
  declarations: [
    DesignSystemComponent,
    MyButtonComponent
  ],
  imports: [
  ],
  exports: [
    DesignSystemComponent,
    MyButtonComponent
  ]
})
export class DesignSystemModule { }
