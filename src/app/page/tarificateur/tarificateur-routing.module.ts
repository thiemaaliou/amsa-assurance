import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarificateurPage } from './tarificateur.page';

const routes: Routes = [
  {
    path: '',
    component: TarificateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarificateurPageRoutingModule {}
