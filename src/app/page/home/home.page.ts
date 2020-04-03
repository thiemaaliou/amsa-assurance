import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { constData } from 'src/app/helpers/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  homeMenus = [
    {
      title: 'Qui sommes nous ?',
      icon: '../../../assets/images/question.png',
      path: '/about-us'
    },
    {
      title: 'Comment souscrire ?',
      icon: '../../../assets/images/subscribe.png',
      path: '/how-subscribe'
    },
    {
      title: 'Souscription',
      icon: '../../../assets/images/subscribe.png',
      path: '/subscribe'
    },
    {
      title: 'Service après vente',
      icon: '../../../assets/images/sav.png',
      path: '/sav'
    },
    {
      title: 'Gestion sinistre',
      icon: '../../../assets/images/disclaimer.png',
      path: '/disclaimer'
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
      icon: '../../../assets/images/support.png',
      path: '/support'
    },
    {
      title: 'Faq',
      icon: '../../../assets/images/faq.png',
      path: '/faq'
    }

  ];
  @ViewChild('homeSlide', {static: false}) homeSlide: IonSlides;
  data: any = constData;
  constructor() { }

  ngOnInit() {
  }

}
