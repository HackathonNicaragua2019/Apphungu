import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiccionarioPage } from './diccionario.page';

const routes: Routes = [
  {
    path: '',
    component: DiccionarioPage
  },
  {
    path: 'dic-espaniol',
    loadChildren: () => import('./dic-espaniol/dic-espaniol.module').then( m => m.DicEspaniolPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiccionarioPageRoutingModule {}
