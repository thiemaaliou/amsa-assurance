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
      path: ''
    },
    {
      title: 'Comment souscrire ?',
      icon: '../../../assets/images/subscribe.png',
      path: ''
    },
    {
      title: 'Service après vente',
      icon: '../../../assets/images/sav.png',
      path: ''
    },
    {
      title: 'Souscription',
      icon: '../../../assets/images/subscribe.png',
      path: ''
    },
    {
      title: 'Gestion sinistre',
      icon: '../../../assets/images/disclaimer.png',
      path: ''
    },
    {
      title: 'Renouvellement',
      icon: '../../../assets/images/renew.png',
      path: ''
    },
    {
      title: 'Réclamation',
      icon: '../../../assets/images/help.png',
      path: ''
    },
    {
      title: 'Support',
      icon: '../../../assets/images/support.png',
      path: ''
    },
    {
      title: 'Faq',
      icon: '../../../assets/images/faq.png',
      path: ''
    }

  ];
  @ViewChild('homeSlide', {static: false}) homeSlide: IonSlides;
  data: any = constData;
  constructor() { }

  ngOnInit() {
  }

}
