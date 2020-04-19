import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.page.html',
  styleUrls: ['./disclaimer.page.scss'],
})
export class DisclaimerPage implements OnInit {
  sinistreForm = new FormGroup({
        numeroPolice: new FormControl(null, [Validators.required]),
        date: new FormControl(null, [Validators.required]),
        lieu: new FormControl(null, [Validators.required]),
        description: new FormControl(null, [Validators.required]),
  });
  constructor(private subscriptionService: SubscriptionService,
              public alertController: AlertController,
              private location: Location) { }

  ngOnInit() {
  }

  saveData(){
    this.subscriptionService.registerSinistre(this.sinistreForm.value).subscribe((resp) =>{
        if(resp['responseCode'] == 200){
          this.subscriptionService.showSuccessMessage("Votre déclaration de sinistre a été bien pris en compte");
          this.sinistreForm.reset();
        }else{
          this.subscriptionService.showErrorMessage("Votre déclaration n'a pas été pris en compte. Veuillez réessayer SVP");
        }
    }, error => {
      this.subscriptionService.showErrorMessage("Votre déclaration n'a pas été pris en compte. Veuillez réessayer SVP");
    });
  }

  goBack(){
    this.location.back();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Cofirmation',
      message: "Voulez-vous vraiment soumettre votre déclaration ?",
      cssClass: "custom-alert",
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Valider',
          handler: () => {
            this.saveData();
          }
        }
      ]
    });

    await alert.present();
  }


}
