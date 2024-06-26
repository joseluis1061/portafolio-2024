import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: 'home'
      // },
      {
        path: '',
        component: HomeComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsideRoutingModule { }
