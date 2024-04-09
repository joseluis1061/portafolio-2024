import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './webside/pages/contact/contact.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./webside/webside.module').then(m => m.WebsideModule)
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
