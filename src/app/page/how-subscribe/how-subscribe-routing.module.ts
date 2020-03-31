import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowSubscribePage } from './how-subscribe.page';

const routes: Routes = [
  {
    path: '',
    component: HowSubscribePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowSubscribePageRoutingModule {}
