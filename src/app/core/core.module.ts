import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { PageNotFundComponent } from './components/page-not-fund/page-not-fund.component';

@NgModule({
  declarations: [HeaderComponent, PageNotFundComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, PageNotFundComponent]
})
export class CoreModule {}
