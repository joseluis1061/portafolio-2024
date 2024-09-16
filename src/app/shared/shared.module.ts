import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ImgComponent } from './components/img/img.component';
import { SwitchLanguagesComponent } from './components/switch-languages/switch-languages.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    ImgComponent,
    SwitchLanguagesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SwitchLanguagesComponent
  ]
})
export class SharedModule { }
