import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DicEspaniolPage } from './dic-espaniol.page';

const routes: Routes = [
  {
    path: '',
    component: DicEspaniolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DicEspaniolPageRoutingModule {}
