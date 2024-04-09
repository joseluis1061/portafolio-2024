import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './webside/components/card/card.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./webside/webside.module').then(m => m.WebsideModule)
  },
  {
    path: 'card',
    component: CardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
