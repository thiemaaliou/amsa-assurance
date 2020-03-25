import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { OnboardPage } from './onboard.page';
import { OnboardPageRoutingModule } from './onboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnboardPageRoutingModule
  ],
  declarations: [OnboardPage]
})
export class OnboardPageModule {}
