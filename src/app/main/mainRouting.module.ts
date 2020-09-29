import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YoutubeComponent } from './Youtube/components/youtube/youtube.component';
import { RouterDemoComponent } from './RouterDemo/RouterDemo/RouterDemo.component';
import { DesignSystemComponent } from './DesignSystem/DesignSystem/DesignSystem.component';

const routes: Routes = [
  {
    path: 'youtube',
    component: YoutubeComponent
  },
  {
    path:'router-demo',
    component: RouterDemoComponent
  },
  {
    path:'design-system',
    component: DesignSystemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
