import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HowSubscribePageRoutingModule } from './how-subscribe-routing.module';

import { HowSubscribePage } from './how-subscribe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HowSubscribePageRoutingModule
  ],
  declarations: [HowSubscribePage]
})
export class HowSubscribePageModule {}
