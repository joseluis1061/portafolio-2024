import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { WebsideRoutingModule } from './webside-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CardComponent } from './components/card/card.component';
import { ContactComponent } from './pages/contact/contact.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ExpirienceComponent } from './pages/expirience/expirience.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    AboutmeComponent,
    ProjectsComponent,
    CardComponent,
    ContactComponent,
    ExpirienceComponent
  ],
  imports: [
    CommonModule,
    WebsideRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class WebsideModule { }
