import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'onboard',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'onboard',
    loadChildren: () => import('./page/onboard/onboard.module').then( m => m.OnboardPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./page/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'how-subscribe',
    loadChildren: () => import('./page/how-subscribe/how-subscribe.module').then( m => m.HowSubscribePageModule)
  },
  {
    path: 'subscribe',
    loadChildren: () => import('./page/subscribe/subscribe.module').then( m => m.SubscribePageModule)
  },
  {
    path: 'sav',
    loadChildren: () => import('./page/sav/sav.module').then( m => m.SavPageModule)
  },
  {
    path: 'disclaimer',
    loadChildren: () => import('./page/disclaimer/disclaimer.module').then( m => m.DisclaimerPageModule)
  },
  {
    path: 'follow-disclaimer',
    loadChildren: () => import('./page/follow-disclaimer/follow-disclaimer.module').then( m => m.FollowDisclaimerPageModule)
  },
  {
    path: 'renew',
    loadChildren: () => import('./page/renew/renew.module').then( m => m.RenewPageModule)
  },
  {
    path: 'returnment',
    loadChildren: () => import('./page/returnment/returnment.module').then( m => m.ReturnmentPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./page/support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./page/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'tarificateur',
    loadChildren: () => import('./page/tarificateur/tarificateur.module').then( m => m.TarificateurPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
