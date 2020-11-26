import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DicEspaniolPageRoutingModule } from './dic-espaniol-routing.module';

import { DicEspaniolPage } from './dic-espaniol.page';

import { PipesModule } from '../../pipes/pipes.module';

import { SharedComponentsModule } from '../../components/shared-components.module';

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    DicEspaniolPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [DicEspaniolPage]
})
export class DicEspaniolPageModule {}
