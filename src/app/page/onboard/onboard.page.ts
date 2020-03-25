import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { constData } from 'src/app/helpers/constants';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.page.html',
  styleUrls: ['./onboard.page.scss'],
})
export class OnboardPage implements OnInit {
  @ViewChild('onBoardSlide', {static: false}) onBoardSlide: IonSlides;
  data: any = constData;
  constructor(private route: Router) { }

  ngOnInit() {
  }

  nextSlide(){
    this.onBoardSlide.isEnd().then((result) => {
      if(!result)
        this.onBoardSlide.slideNext();
      else
        this.route.navigate(['/home']);
    });
  }

  skipSlide(){
    this.route.navigate(['/home']);
  }

}
