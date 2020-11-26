import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancioneroPage } from './cancionero.page';

const routes: Routes = [
  {
    path: '',
    component: CancioneroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancioneroPageRoutingModule {}
