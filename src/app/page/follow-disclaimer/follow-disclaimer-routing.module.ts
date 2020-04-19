import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FollowDisclaimerPage } from './follow-disclaimer.page';

const routes: Routes = [
  {
    path: '',
    component: FollowDisclaimerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FollowDisclaimerPageRoutingModule {}
