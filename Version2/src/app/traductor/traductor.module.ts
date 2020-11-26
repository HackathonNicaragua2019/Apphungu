import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TraductorPageRoutingModule } from './traductor-routing.module';

import { TraductorPage } from './traductor.page';

import { SharedComponentsModule } from '../components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TraductorPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [TraductorPage]
})
export class TraductorPageModule {}
