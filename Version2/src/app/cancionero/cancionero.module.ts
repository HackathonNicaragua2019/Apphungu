import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancioneroPageRoutingModule } from './cancionero-routing.module';

import { CancioneroPage } from './cancionero.page';

import { SharedComponentsModule } from '../components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CancioneroPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [CancioneroPage]
})
export class CancioneroPageModule {}
