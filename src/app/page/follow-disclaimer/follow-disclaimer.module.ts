import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FollowDisclaimerPageRoutingModule } from './follow-disclaimer-routing.module';

import { FollowDisclaimerPage } from './follow-disclaimer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FollowDisclaimerPageRoutingModule
  ],
  declarations: [FollowDisclaimerPage]
})
export class FollowDisclaimerPageModule {}
