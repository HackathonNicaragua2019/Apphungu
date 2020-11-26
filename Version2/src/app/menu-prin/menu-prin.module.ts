import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPrinPageRoutingModule } from './menu-prin-routing.module';

import { MenuPrinPage } from './menu-prin.page';
import { SharedComponentsModule } from '../components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPrinPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [MenuPrinPage]
})
export class MenuPrinPageModule {}
