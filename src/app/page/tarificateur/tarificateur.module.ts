import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarificateurPageRoutingModule } from './tarificateur-routing.module';

import { TarificateurPage } from './tarificateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TarificateurPageRoutingModule
  ],
  declarations: [TarificateurPage]
})
export class TarificateurPageModule {}
