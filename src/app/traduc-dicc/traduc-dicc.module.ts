import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TraducDiccPageRoutingModule } from './traduc-dicc-routing.module';

import { TraducDiccPage } from './traduc-dicc.page';
import { SharedComponentsModule } from '../components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TraducDiccPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [TraducDiccPage]
})
export class TraducDiccPageModule {}
