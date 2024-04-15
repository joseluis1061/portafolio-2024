import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpirienceComponent } from './webside/pages/expirience/expirience.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./webside/webside.module').then(m => m.WebsideModule)
  },
  {
    path: 'experience',
    component: ExpirienceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
