import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TraducDiccPage } from './traduc-dicc.page';

const routes: Routes = [
  {
    path: '',
    component: TraducDiccPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraducDiccPageRoutingModule {}
