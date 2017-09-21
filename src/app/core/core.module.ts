import {NgModule, SkipSelf, Optional} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CenterComponent} from './main/center.component';
import {MdToolbarModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule, MdToolbarModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    CenterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CenterComponent,
  ]
})
export class CoreModule {
  constuctor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('Module already exists!!!');
    }
  }
}

