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

@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    AboutmeComponent,
    ProjectsComponent,
    CardComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    WebsideRoutingModule,
    SharedModule
  ]
})
export class WebsideModule { }
