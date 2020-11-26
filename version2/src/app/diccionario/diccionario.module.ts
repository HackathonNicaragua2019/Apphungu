import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiccionarioPageRoutingModule } from './diccionario-routing.module';

import { DiccionarioPage } from './diccionario.page';
import { SharedComponentsModule } from '../components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiccionarioPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [DiccionarioPage]
})
export class DiccionarioPageModule {}
