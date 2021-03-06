import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisclaimerPageRoutingModule } from './disclaimer-routing.module';

import { DisclaimerPage } from './disclaimer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DisclaimerPageRoutingModule
  ],
  declarations: [DisclaimerPage]
})
export class DisclaimerPageModule {}
