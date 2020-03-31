import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SubscriptionService } from './services/subscription.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Qui sommes-nous ?',
      url: '/about-us',
      icon: 'mail'
    },
    {
      title: 'Comment souscrire ?',
      url: '/how-subscribe',
      icon: 'paper-plane'
    },
    {
      title: 'Souscription',
      url: '/subscribe',
      icon: 'heart'
    },
    {
      title: 'Service après vente',
      url: '/sav',
      icon: 'archive'
    },
    {
      title: 'Gestion sinistre',
      url: '/disclaimer',
      icon: 'trash'
    },
    {
      title: 'Renouvellement',
      url: '/renew',
      icon: 'warning'
    },
    {
      title: 'Réclamation',
      url: '/returnment',
      icon: 'warning'
    },
    {
      title: 'Support',
      url: '/support',
      icon: 'warning'
    },
    {
      title: 'Faq',
      url: '/faq',
      icon: 'warning'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private subscriptionService: SubscriptionService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    // const path = window.location.pathname.split('folder/')[1];
    // if (path !== undefined) {
    //   this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    // }
    this.subscriptionService.login().subscribe((resp) =>{
      if(resp['access_token'])
        localStorage.setItem('access_token_ma', resp['access_token']);
    });
  }
}
