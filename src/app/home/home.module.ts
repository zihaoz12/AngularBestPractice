import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CanvasComponent } from './components/canvas/canvas.component';
import { CardsgameComponent } from './components/Cardsgame/Cardsgame.component';
import { RelaxerComponent } from './components/Relaxer/Relaxer.component';

@NgModule({
  declarations: [HomeComponent,CanvasComponent, CardsgameComponent,RelaxerComponent],
  imports: [SharedModule],
  exports: [HomeComponent, CanvasComponent, CardsgameComponent, RelaxerComponent]
})
export class HomeModule {}
