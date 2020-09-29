import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';

import { SharedModule } from './shared/shared.module';
import { MyPipePipe } from './my-pipe.pipe';
import { MainModule } from './main/main.module';


@NgModule({
  declarations: [
    AppComponent,
    MyPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    SharedModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
