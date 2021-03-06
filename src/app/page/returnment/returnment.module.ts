import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReturnmentPageRoutingModule } from './returnment-routing.module';

import { ReturnmentPage } from './returnment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ReturnmentPageRoutingModule
  ],
  declarations: [ReturnmentPage]
})
export class ReturnmentPageModule {}
