import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenewPage } from './renew.page';

const routes: Routes = [
  {
    path: '',
    component: RenewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenewPageRoutingModule {}
