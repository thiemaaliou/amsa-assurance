import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { constData } from 'src/app/helpers/constants';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.page.html',
  styleUrls: ['./onboard.page.scss'],
})
export class OnboardPage implements OnInit {
  @ViewChild('onBoardSlide', {static: false}) onBoardSlide: IonSlides;
  data: any = constData;
  slideIndex: number = 0;
  returnmentForm = new FormGroup({
        prenom: new FormControl(null, [Validators.required]),
        nom: new FormControl(null, [Validators.required]),
        telephone: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required]),
  });
  constructor(private route: Router) {
   }

  ngOnInit() {

  }

  ngAfterViewInit(){
    //this.onBoardSlide.lockSwipeToNext(true);
  }

  slideChanged(event){
    this.onBoardSlide.getActiveIndex().then((index) => {
      this.slideIndex = index;
      console.log(index);
    });
  }
  nextSlide(){
    this.onBoardSlide.getActiveIndex().then((index) => {
      this.slideIndex = index;
    });
    this.onBoardSlide.slideNext();
  }

  skipSlide(){
    this.route.navigate(['/home']);
  }

  saveData(){
    this.route.navigate(['/home']);
  }

}
