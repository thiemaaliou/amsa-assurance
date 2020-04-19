import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenewPageRoutingModule } from './renew-routing.module';

import { RenewPage } from './renew.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RenewPageRoutingModule
  ],
  declarations: [RenewPage]
})
export class RenewPageModule {}
