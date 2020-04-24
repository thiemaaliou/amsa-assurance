import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { constData } from 'src/app/helpers/constants';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  assetsUrl: string =  environment.assetsUrl;
  titleMenu: number = 1;
  homeMenus = [
    {
      title: 'A propos',
      icon: '../../../assets/images/question.png',
      path: '/about-us'
    },
    {
      title: 'Souscription',
      icon: '../../../assets/images/subscribe.png',
      path: '/subscribe'
    },
    {
      title: 'Gestion Sinistre',
      icon: '../../../assets/images/disclaimer.png',
      path: '/disclaimer'
    },
    {
      title: 'Nos Produits',
      icon: '../../../assets/images/disclaimer.png',
      path: '/follow-disclaimer'
    },
    {
      title: 'Tarificateur',
      icon: '../../../assets/images/sav.png',
      path: '/tarificateur'
    },

    {
      title: 'Renouvellement',
      icon: '../../../assets/images/renew.png',
      path: '/renew'
    },
    {
      title: 'Réclamation',
      icon: '../../../assets/images/help.png',
      path: '/returnment'
    },
    {
      title: 'Support',
      icon: '../../../assets/images/faq.png',
      path: '/faq'
    }

  ];
  @ViewChild('homeSlide', {static: false}) homeSlide: IonSlides;
  data: any = constData;
  homeMenus1 = [
    // {
    //   title: 'Qui sommes nous?',
    //   icon: '../../../assets/images/question.png',
    //   path: '/about-us'
    // },
    {
      title: 'Souscription',
      icon: '../../../assets/images/subscribe.png',
      path: '/subscribe'
    },
    {
      title: 'Renouvellement',
      icon: '../../../assets/images/renew.png',
      path: '/renew'
    },
    {
      title: 'Tarificateur',
      icon: '../../../assets/images/help.png',
      path: '/returnment'
    },
    {
      title: 'Gestion sinistre',
      icon: '../../../assets/images/disclaimer.png',
      path: '/disclaimer'
    },
    // {
    //   title: 'Suivi sinistre',
    //   icon: '../../../assets/images/disclaimer.png',
    //   path: '/follow-disclaimer'
    // }
    // {
    //   title: 'Faq',
    //   icon: '../../../assets/images/faq.png',
    //   path: '/faq'
    // }

  ];
  sinsitreMenus = [
    // {
    //   title: 'IART',
    //   icon: '../../../assets/images/disclaimer.png',
    //   path: '',
    //   type: 'main'
    // },
    {
      title: 'Incendie',
      icon: '../../../assets/images/disclaimer.png',
      path: '/follow-disclaimer'
    },
    {
      title: 'Accident',
      icon: '../../../assets/images/subscribe.png',
      path: '/follow-disclaimer'
    },
    {
      title: 'Voyage',
      icon: '../../../assets/images/renew.png',
      path: '/follow-disclaimer'
    },
    {
      title: 'MRH',
      icon: '../../../assets/images/faq.png',
      path: '/follow-disclaimer'
    },
    {
      title: 'Maladie',
      icon: '../../../assets/images/sav.png',
      path: '/follow-disclaimer'
    },
    {
      title: 'Automobile',
      icon: '../../../assets/images/disclaimer.png',
      path: '/follow-disclaimer'
    },
    // {
    //   title: 'Assurance vie',
    //   icon: '../../../assets/images/renew.png',
    //   path: '',
    //   type: 'main'
    // },
    {
      title: 'Epargne',
      icon: '../../../assets/images/disclaimer.png',
      path: '/follow-disclaimer'
    },
    {
      title: 'Retraite',
      icon: '../../../assets/images/disclaimer.png',
      path: '/follow-disclaimer'
    },
    {
      title: 'Décès',
      icon: '../../../assets/images/disclaimer.png',
      path: '/follow-disclaimer'
    },
  ];
  myInsurance = [
    {
      title: 'Assurance vie',
      icon: '../../../assets/images/disclaimer.png',
    },
    {
      title: 'Assurance décès',
      icon: '../../../assets/images/disclaimer.png',
    },
    {
      title: 'Assurance MRH',
      icon: '../../../assets/images/sav.png',
    }
  ]
  slideOpts = {
    slidePerView: 3.2,
    speed: 500,
    autoplay: true
  };
  constructor() { }

  ngOnInit() {
  }

  segmentChanged(event){
    this.titleMenu = event.detail.value;

  }

}
