import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-follow-disclaimer',
  templateUrl: './follow-disclaimer.page.html',
  styleUrls: ['./follow-disclaimer.page.scss'],
})
export class FollowDisclaimerPage implements OnInit {
  sendingRequest: boolean = false;
  sinistreForm = new FormGroup({
      numeroPolice: new FormControl(null, [Validators.required]),
  });
  contract: any;
  constructor(private subscriptionService: SubscriptionService,
              public alertController: AlertController,
              private location: Location) { }

  ngOnInit() {}

  getData(){
    this.sendingRequest = true;
    this.subscriptionService.checkSinistre(this.sinistreForm.value).subscribe((resp) =>{
      this.contract = resp['data'];
      this.sendingRequest = false;
    }, error => {
      this.sendingRequest = false;
    });
  }

  goBack(){
    this.location.back();
  }


}
