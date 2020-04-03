import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SubscriptionService } from './services/subscription.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  assetsUrl: string =  environment.assetsUrl;
  public appPages = [
    {
      title: 'Qui sommes-nous ?',
      url: '/about-us',
      icon: 'business'
    },
    {
      title: 'Comment souscrire ?',
      url: '/how-subscribe',
      icon: 'alert-circle'
    },
    {
      title: 'Souscription',
      url: '/subscribe',
      icon: 'document-text'
    },
    {
      title: 'Service après vente',
      url: '/sav',
      icon: 'people'
    },
    {
      title: 'Gestion sinistre',
      url: '/disclaimer',
      icon: 'trash'
    },
    {
      title: 'Renouvellement',
      url: '/renew',
      icon: 'speedometer'
    },
    {
      title: 'Réclamation',
      url: '/returnment',
      icon: 'thumbs-down'
    },
    {
      title: 'Support',
      url: '/support',
      icon: 'person'
    },
    {
      title: 'Faq',
      url: '/faq',
      icon: 'information-circle'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private subscriptionService: SubscriptionService,
    private route: Router
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
